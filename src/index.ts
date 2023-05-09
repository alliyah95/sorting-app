import { Sorter } from "./Sorter";
import { NumbersCollection } from "./NumbersCollection";
import { CharactersCollection } from "./CharactersCollection";

const nums = new NumbersCollection([10, 3, -5, 0]);
const chars = new CharactersCollection("gkrhabdc");

const numsSorter = new Sorter(nums);
numsSorter.sort();

const charsSorter = new Sorter(chars);
charsSorter.sort();

console.log(nums);
console.log(chars);
