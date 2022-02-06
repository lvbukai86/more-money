<template>
  <div>
    <layout class-prefix="layout">
      <NumberPad/>
      <Notes/>
      <Types/>
      <Tags :data-source.sync="tags"/>

    </layout>
  </div>

</template>

<script >
import NumberPad from '@/components/Money/NumberPad.vue';
import Notes from '@/components/Money/Notes.vue';
import Types from '@/components/Money/Types.vue';
import Tags from '@/components/Money/Tags.vue';
export default {
  name: 'Money',
  components: {Tags, Types, Notes, NumberPad},
  data(){
    return{
      tags:['衣','食','住','行']
    }
  }
};
</script>
<style lang="scss">
.layout-content{
  display: flex;
  flex-direction: column-reverse;
}
</style>
