<template>
  <footer class="page-meta">
    <div class="page-meta-inner">
      <div class="page-meta-inner-right">
        <div
          v-if="lastUpdated"
          class="meta-item last-updated"
        >
          <ClientOnly>
            <span class="meta-item-info">{{ themeLocale.lastUpdatedText }} {{ lastUpdated }}</span>
          </ClientOnly>
        </div>
        <div
          v-if="editNavLink"
          class="meta-item edit-link"
        >
          <NavLink
            class="meta-item"
            :item="editNavLink"
          />
        </div>
      </div>

      <div
        v-if="contributors && contributors.length"
        class="meta-item contributors"
      >
        <span class="meta-item-label">
          {{ themeLocale.contributorsText }}
        </span>
        <span class="meta-item-info">
          <span
            v-for="(contributor, index) in contributors"
            :key="index"
            class="contributor"
            :title="contributor.title"
          >
            <img
              class="meta-item-avatar"
              :src="contributor.gravatar"
              :alt="contributor.alt"
              :title="contributor.title"
              width="30"
              height="30"
            >
          </span>
        </span>
      </div>
    </div>
  </footer>
</template>

<script setup>
// Deps
import {computed} from 'vue';
import gravatarUrl from 'gravatar-url';
import * as timeago from 'timeago.js';

// Stuff from parent theme
import {usePageData, usePageFrontmatter} from '@vuepress/client';
import {useThemeLocaleData} from '@vuepress/theme-default/lib/client/composables';
import {resolveEditLink} from '@vuepress/theme-default/lib/client/utils';
import NavLink from '@vuepress/theme-default/lib/client/components/NavLink.vue';

const useEditNavLink = () => {
  const themeLocale = useThemeLocaleData();
  const page = usePageData();
  const frontmatter = usePageFrontmatter();
  return computed(() => {
    const showEditLink = frontmatter.value.editLink || themeLocale.value.editLink || true;

    // Bail quick if we can
    if (!showEditLink) return null;
    const {
      repo,
      docsRepo = repo,
      docsBranch = 'main',
      docsDir = '',
      editLinkText,
    } = themeLocale.value;

    // Try to bail again
    if (!docsRepo) return null;
    const editLink = resolveEditLink({
      docsRepo,
      docsBranch,
      docsDir,
      filePathRelative: page.value.filePathRelative,
      editLinkPattern: frontmatter.value.editLinkPattern || themeLocale.value.editLinkPattern,
    });

    // Final bail attemp
    if (!editLink) return null;
    return {text: editLinkText || 'Edit this page', link: editLink};
  });
};

const useLastUpdated = () => {
  const themeLocale = useThemeLocaleData();
  const page = usePageData();
  const frontmatter = usePageFrontmatter();
  return computed(() => {
    const showLastUpdated = frontmatter.value.lastUpdated || themeLocale.value.lastUpdated || true;
    if (!showLastUpdated) return null;
    if (!page.value.git.updatedTime) return null;
    const updatedDate = new Date(page.value.git.updatedTime);
    return timeago.format(updatedDate.toLocaleString());
  });
};

const useContributors = () => {
  const themeLocale = useThemeLocaleData();
  const page = usePageData();
  const frontmatter = usePageFrontmatter();
  return computed(() => {
    const showContributors = frontmatter.value.contributors || themeLocale.value.contributors || true;
    if (!showContributors) return null;
    const contributors = page.value.git.contributors || null;
    // add in gravatar things
    contributors.forEach(contributor => {
      contributor.gravatar = gravatarUrl(contributor.email, {size: 60});
      contributor.alt = `Picture of ${contributor.name}`;
      contributor.title = `${contributor.name} (${contributor.email}) - ${contributor.commits} commits`;
    });
    return contributors;
  });
};

const themeLocale = useThemeLocaleData();
const editNavLink = useEditNavLink();
const lastUpdated = useLastUpdated();
const contributors = useContributors();
</script>

<style lang="scss" scoped>
@import '../styles/main.scss';
.page-meta-inner {
  border-top: 1px solid var(--c-border);
  font-size: small;
  .meta-item.contributors {
    width: 50%;
    display: flex;
    flex-direction: row;
    align-items: center;
    column-gap: 10px;
  }
  .meta-item-avatar {
    border-radius: 50% !important;
    margin: 2px;
    margin-top: 10px;
  }
  .meta-item-label {
    font-weight: 400;
    color: var(--c-text-quote);
  }
  .page-meta-inner-right {
    float: right;
    .last-updated {
      float: none;
      text-align: right;
    }
    .edit-link {
      display: block;
    }
  }
}
</style>
