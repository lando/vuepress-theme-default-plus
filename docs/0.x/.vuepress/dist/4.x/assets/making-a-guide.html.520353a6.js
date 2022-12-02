import{_ as i,r as s,o as u,c as d,a as t,d as a,w as o,b as e,e as c}from"./app.164a0dd5.js";const r={},h=t("p",null,[e("Guides are "),t("em",null,"how tos"),e(" or "),t("em",null,"tutorials"),e(' that fit somewhere in between technical documentation and blog posts. They generally seek to answer a single question such as "How do I create a guide using this theme?" and are heavy on code snippets. In this case there are actually two ways to create a guide:')],-1),p=t("li",null,"Autopopulating data from GitHub",-1),m=t("h2",{id:"autopopulating-data-from-github",tabindex:"-1"},[t("a",{class:"header-anchor",href:"#autopopulating-data-from-github","aria-hidden":"true"},"#"),e(" Autopopulating data from GitHub")],-1),g=t("code",null,"repo",-1),_=t("code",null,"autoPopulate",-1),k=t("code",null,"true",-1),f=c(`<p>Once you have done that then you can make a guide by adding the following frontmatter to your markdown file.</p><div class="custom-container warning"><p class="custom-container-title">You must set the title!</p><p>Note that because of how the underlying components are layered and called you must set the title in the frontmatter. This will populate the <code>h1</code> on the page. You can and should then omit the <code>h1</code> in the markdown content itself.</p></div><div class="language-markdown line-numbers-mode" data-ext="md"><pre class="language-markdown"><code><span class="token front-matter-block"><span class="token punctuation">---</span>
<span class="token front-matter yaml language-yaml"><span class="token key atrule">title</span><span class="token punctuation">:</span> Making A Guide 1
<span class="token key atrule">guide</span><span class="token punctuation">:</span> <span class="token boolean important">true</span></span>
<span class="token punctuation">---</span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,3),b={href:"https://github.com/lando/vuepress-theme-default-plus/blob/main/docs/making-a-guide.html",target:"_blank",rel:"noopener noreferrer"},y=t("code",null,"authors",-1),v=t("code",null,"date",-1);function w(x,G){const n=s("RouterLink"),l=s("ExternalLinkIcon");return u(),d("div",null,[h,t("ul",null,[p,t("li",null,[a(n,{to:"/making-a-guide-2.html"},{default:o(()=>[e("Manually entering data")]),_:1})])]),m,t("p",null,[e("To automatically grab relevant authorship and data information make sure you set "),g,e(" to a publically accessible GitHub repo and also set "),_,e(" to "),k,e(" in the "),a(n,{to:"/config.html"},{default:o(()=>[e("theme config")]),_:1}),e(".")]),f,t("p",null,[e("You can check out the full markdown file that generated this page "),t("a",b,[e("here"),a(l)]),e(". If you are interested in manually setting the "),y,e(", "),v,e(" and edit link then check out "),a(n,{to:"/making-a-guide-2.html"},{default:o(()=>[e("Making a Guide 2")]),_:1})])])}const N=i(r,[["render",w],["__file","making-a-guide.html.vue"]]);export{N as default};
