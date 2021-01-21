//09. Sorted List
let list = createSortedList();
list.add(5);
list.add(6);
list.add(7);
console.log(list.get(1)); 
list.remove(1);
console.log(list.get(1));
console.log(list.print);

function createSortedList (){
    return {
        print:[],
        size:0,
        add (element){
            this.print.push(element);
            this.size++;
            return this.print.sort((a,b) => a-b);
        },
        remove (index){
            if(this.print[index] !== undefined){
                this.size--;
                return this.print.splice(index,1);
            }
        },
        get (index){
            if(this.print[index] !== undefined){
                return this.print[index];
            }
        }

    };
}
