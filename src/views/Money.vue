<template>
  <div>
    <layout class-prefix="layout">
      <NumberPad :value.sync="record.amount" @submit="saveRecord"/>
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
import {Component, Watch} from 'vue-property-decorator';
import Vue from 'vue';

const  recordList:RecordItem[]=[];

@Component({
  components: {Tags, Notes, Types, NumberPad}
})
export default class Money extends Vue {

  tags = ['衣', '食', '住', '行'];
  recordList: RecordItem[]=JSON.parse(window.localStorage.getItem('recordList') || '[]');
  record: RecordItem ={
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
  saveRecord(){
    const record2 :RecordItem=JSON.parse(JSON.stringify(this.record));
    record2.createAt=new Date();
    this.recordList.push(record2);
  }
  @Watch('recordList')
  onRecordListChange(){
    window.localStorage.setItem('recordList',JSON.stringify(this.recordList))
  }
}
</script>
<style lang="scss">
.layout-content {
  display: flex;
  flex-direction: column-reverse;
}
</style>
