<template>
  <div>
    <layout class-prefix="layout">
      <NumberPad :value.sync="record.amount" @submit="saveRecord"/>
      <Tabs :data-source="recordTypeList"
            :value.sync="record.type"/>
      <div class="notes">
      <FormItem @update:value="onUpdateNotes" field-name="备注"
      placeholder="在这里输入备注"/>
      </div>
      <Tags/>
    </layout>
  </div>
</template>
<script lang="ts">
import NumberPad from '@/components/Money/NumberPad.vue';
import FormItem from '@/components/Money/FormItem.vue';
import Tags from '@/components/Money/Tags.vue';
import {Component, Watch} from 'vue-property-decorator';
import Vue from 'vue';
import Tabs from '@/components/Tabs.vue';
import recordTypeList from '@/constants/recordTypeList';

@Component({
  components: {Tabs,Tags,  FormItem,  NumberPad},
      computed: {
        recordList() {
          return this.$store.state.recordList;
        }
      }
}

)
export default class Money extends Vue {
  recordTypeList = recordTypeList;
  record: RecordItem ={
    tags:[], notes:'',type:'-',amount:0
  };
  created(){
    this.$store.commit('fetchRecords')
  }

  onUpdateNotes(value:string){
   this.record.notes=value;
  }


  saveRecord(){
    this.$store.commit('createRecord', this.record);
  }


}
</script>
<style lang="scss">
.layout-content {
  display: flex;
  flex-direction: column-reverse;
}
.notes{
  padding: 12px 0;
}
</style>
