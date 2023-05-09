import { Sorter } from "./Sorter";
import { NumbersCollection } from "./NumbersCollection";
import { CharactersCollection } from "./CharactersCollection";
import { LinkedList } from "./LinkedList";

const nums = new NumbersCollection([10, 3, -5, 0]);
const chars = new CharactersCollection("gkrhabdc");

const numsSorter = new Sorter(nums);
numsSorter.sort();

const charsSorter = new Sorter(chars);
charsSorter.sort();

const linkedList = new LinkedList();
linkedList.add(500);
linkedList.add(-10);
linkedList.add(-3);
linkedList.add(4);
const linkedListSorter = new Sorter(linkedList);
linkedListSorter.sort();

console.log(nums);
console.log(chars);
console.log(linkedList);
