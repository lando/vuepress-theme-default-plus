import{_ as i,r as s,o as c,c as u,a,d as e,w as o,b as n,e as p}from"./app.292ca3f4.js";const d={},r=a("p",null,[n("Guides are "),a("em",null,"how tos"),n(" or "),a("em",null,"tutorials"),n(' that fit somewhere in between technical documentation and blog posts. They generally seek to answer a single question such as "How do I create a guide using this theme?" and are heavy on code snippets. In this case there are actually two ways to create a guide:')],-1),m=a("li",null,"Manually entering data",-1),k=p(`<h2 id="manually-entering-data" tabindex="-1"><a class="header-anchor" href="#manually-entering-data" aria-hidden="true">#</a> Manually entering data</h2><p>To manually enter authorship, update time and edit link information manually just add some combination of the below frontmatter to the top of your guide&#39;s markdown file.</p><div class="custom-container warning"><p class="custom-container-title">You must set the title!</p><p>Note that because of how the underlying components are layered and called you must set the title in the frontmatter. This will populate the <code>h1</code> on the page. You can and should then omit the <code>h1</code> in the markdown content itself.</p></div><div class="custom-container tip"><p class="custom-container-title">Timestamp in ms</p><p>Note that the update timestamp is in milliseconds and not seconds!</p></div><div class="language-markdown line-numbers-mode" data-ext="md"><pre class="language-markdown"><code><span class="token front-matter-block"><span class="token punctuation">---</span>
<span class="token front-matter yaml language-yaml"><span class="token key atrule">title</span><span class="token punctuation">:</span> Making A Guide 2
<span class="token key atrule">guide</span><span class="token punctuation">:</span> <span class="token boolean important">true</span>
<span class="token key atrule">authors</span><span class="token punctuation">:</span>
  <span class="token punctuation">-</span> <span class="token key atrule">name</span><span class="token punctuation">:</span> Mike Pirog
    <span class="token key atrule">link</span><span class="token punctuation">:</span> mailto<span class="token punctuation">:</span>mike@lando.dev
    <span class="token key atrule">pic</span><span class="token punctuation">:</span> https<span class="token punctuation">:</span>//gravatar.com/avatar/dc1322b3ddd0ef682862d7f281c821bb
  <span class="token punctuation">-</span> <span class="token key atrule">name</span><span class="token punctuation">:</span> John Ouellet
    <span class="token key atrule">link</span><span class="token punctuation">:</span> mailto<span class="token punctuation">:</span>john@lando.dev
    <span class="token key atrule">pic</span><span class="token punctuation">:</span> https<span class="token punctuation">:</span>//avatars.githubusercontent.com/u/5560907<span class="token punctuation">?</span>v=4
<span class="token key atrule">editlink</span><span class="token punctuation">:</span>
  <span class="token key atrule">link</span><span class="token punctuation">:</span> https<span class="token punctuation">:</span>//www.youtube.com/watch<span class="token punctuation">?</span>v=dQw4w9WgXcQ
  <span class="token key atrule">text</span><span class="token punctuation">:</span> Never gonna edit you up
<span class="token key atrule">updated</span><span class="token punctuation">:</span>
  <span class="token key atrule">timestamp</span><span class="token punctuation">:</span> <span class="token number">1613073690000</span></span>
<span class="token punctuation">---</span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,5),h={href:"https://github.com/lando/vuepress-theme-default-plus/blob/main/docs/making-a-guide-2.html",target:"_blank",rel:"noopener noreferrer"},v=a("code",null,"authors",-1),g=a("code",null,"date",-1);function b(y,_){const t=s("RouterLink"),l=s("ExternalLinkIcon");return c(),u("div",null,[r,a("ul",null,[m,a("li",null,[e(t,{to:"/making-a-guide.html"},{default:o(()=>[n("Autopopulating data from GitHub")]),_:1})])]),k,a("p",null,[n("You can check out the full markdown file that generated this page "),a("a",h,[n("here"),e(l)]),n(". If you are interested in automatically setting the "),v,n(", "),g,n(" and edit link then check out "),e(t,{to:"/making-a-guide.html"},{default:o(()=>[n("Making a Guide")]),_:1})])])}const w=i(d,[["render",b],["__file","making-a-guide-2.html.vue"]]);export{w as default};
