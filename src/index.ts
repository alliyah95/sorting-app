import { NumbersCollection } from "./NumbersCollection";
import { CharactersCollection } from "./CharactersCollection";
import { LinkedList } from "./LinkedList";

const nums = new NumbersCollection([10, 3, -5, 0]);
const chars = new CharactersCollection("gkrhabdc");
const linkedList = new LinkedList();
linkedList.add(500);
linkedList.add(-10);
linkedList.add(-3);
linkedList.add(4);

nums.sort();
chars.sort();
linkedList.sort();

console.log(nums);
console.log(chars);
console.log(linkedList);
