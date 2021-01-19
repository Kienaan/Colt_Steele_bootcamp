let input = prompt("What would you like to do")
const lists = ["Ariga lis", "Geela lis"]
while (input !== "quit") {
    if (input === 'list') {
        console.log("#########################")
        for (let i = 0; i < lists.length; i++) {
            console.log(`${i}: ${lists[i]}`);
        }
        console.log("#########################")
    } else if (input === "new") {
        const newList = prompt("Ok, maxaad sameyn hadda?");
        lists.push(newList);
        console.log(`${newList} added to the list!`)
    } else if (input === "delete") {
        const index = parseInt(prompt("what index?"));
        if (!Number.isNaN(index)) {
            const deleted = lists.splice(index, 1);
            console.log(`ok, ${deleted[0]} is deleted!`)
        } else {
            console.log("get out of here!");
        }


    }
    input = prompt("What would you like to do")
}
console.log("You quit it")