const localStorageKeyName='recordList';
const model={
    fetch(){
        return JSON.parse(window.localStorage.getItem('recordList') || '[]');
    },
    save(data:RecordItem[]) {
        window.localStorage.setItem(localStorageKeyName,JSON.stringify(data));
    }
};
export {model};