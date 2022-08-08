function totalWoodQuintity(chairQuintity, tableQuintity, bedQuintity){
const perchairWood = 3;
const perTableWood = 6;
const perBedWood = 50;

const chairTotalWood = chairQuintity * perchairWood
const tableTotalWood = tableQuintity * perTableWood
const bedTotalWood = bedQuintity * perBedWood
const totalWood = chairTotalWood + tableTotalWood + bedTotalWood
return totalWood ;


}
const woodQuintity= totalWoodQuintity(4,4,1)
console.log(woodQuintity)
