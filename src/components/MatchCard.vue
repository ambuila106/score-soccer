<template>
  <div class="match-card">
    <div class="match-card__head">
      <img :src="match.thumbnail" />
    </div>

    <div class="match-card__content">
      <h4>{{ match.title }}</h4>
      <p>{{ match.competition.name }}</p>
      <span class="text-small">{{ match.date }}</span>
    </div>
  </div>
</template>

<script>
export default {
  props: ["match"],
  name: "match-card",
}
</script>