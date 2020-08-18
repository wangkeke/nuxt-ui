<template>
  <article class="media">
    <figure class="media-left">
      <p
        class="image"
        style="max-width: 180px;"
      >
        <img
          src="http://tu.sixco.shop/upload/vod/20191029-2/84608aa269058ca7aa632441b4ef84a8.jpg"
        />
      </p>
    </figure>
    <div class="media-content">
      <div class="content">
        <p style="font-size: 0.9rem;">
          <strong class="subtitle"
          >第九区</strong
          >
          <small>@johnsmith</small>
          <br />
          评分：<strong
          class="has-text-danger"
        >9.0</strong
        >
          <br />
          年份：2018
          <br />
          类型：恐怖
          <br />
          地区：美国
          <br />
          演员：沙尔托·科普雷,詹森·库伯,娜塔莉·博尔特,茜尔雯·斯特赖克,约翰·萨莫尔,威廉·艾伦·扬,尼克·布
          <br />
          导演：尼尔·布洛姆坎普
          <br />
          概要：
          第九区：1990年，一艘巨大的飞船出现在地球上空，人们惶恐不安，却又分外好奇。经过一段时间紧张的等待，外星飞船始终没有动静。人类终于小心翼翼靠近它，强行走进舱内，结果发现了不计其数的外星人。他们形容丑陋，宛如虾子，而且健康状况极差，虚弱无力。原来这是一群来自外星的难民，他们最终被地球人接纳，并隔离在南非约翰内斯堡的一片区域内生活，此地名为“第九区”。经过长达20年的繁衍，外星难民的数量扩张至180万之多，且和周边人类的矛盾冲突不断，越来越多的人类呼吁将“大虾”赶出地球。
          MNU（列国同盟组织）经过磋商，决定将外星难民迁移到更为偏远的区域。MNU外星事务部门的特工威库斯（Sharlto
          Copley
          饰）专门负责搬迁工作。威库斯在动员过程中傲慢随意，与当地居民冲突频频。最终，他为自己的行为付出代价，外星人的神秘流体将其感染，威库斯慢慢变成了外星人的模样……
        </p>
      </div>
    </div>
  </article>
</template>

<script>
    export default {
        name: "MovieInfo",
      resource: {
        type: Object,
        required: true,
        default(){
          return {}
        }
      },
    }
</script>

<style scoped>

</style>
