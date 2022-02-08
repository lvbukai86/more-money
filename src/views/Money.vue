<template>
  <div>
    <layout class-prefix="layout">
      {{record}}}
      <NumberPad :value.sync="record.amount"/>
      <Notes @update:value="onUpdateNotes"/>
      <Types :value.sync="record.type"/>
      <Tags :data-source.sync="tags" @update:value="OnUpdateTags"/>
    </layout>
  </div>
</template>
<script lang="ts">
import NumberPad from '@/components/Money/NumberPad.vue';
import Notes from '@/components/Money/Notes.vue';
import Types from '@/components/Money/Types.vue';
import Tags from '@/components/Money/Tags.vue';
import {Component} from 'vue-property-decorator';
import Vue from 'vue';
type Record={
  tags:string[]
  notes:string
  type:string
  amount:number
}

@Component({
  components: {Tags, Notes, Types, NumberPad}
})
export default class Money extends Vue {

  tags = ['衣', '食', '住', '行'];
  record: Record ={
    tags:[], notes:'',type:'-',amount:0
  };

  OnUpdateTags(value: string[]) {
    this.record.tags=value;
  }
  onUpdateNotes(value:string){
   this.record.notes=value;
  }
  onUpdateType(value:string){
   this.record.type=value;
  }
  onUpdateAmount(value:string){
   this.record.amount=parseFloat(value);
  }
}
</script>
<style lang="scss">
.layout-content {
  display: flex;
  flex-direction: column-reverse;
}
</style>
