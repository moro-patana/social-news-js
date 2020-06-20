// write your code here
console.log('it works!');
//Store all of the object inside the array//
const link = [
    {
        title: "Facebook",
        url: "http://facebook.com",
        author: "Anni"
    },
    {
        title: "Github",
        url: "http://github.com",
        author: "Peter"

    },
    {
        title: "Twitter",
        url: "http://twitter.com",
        author: "Leon"

    }

];
// Show all the list of link//

const listOflink = () => {
    for (let i = 0; i < link.length; i++) {
        let linkString = `Title : ${link[i].title} 
url : ${link[i].url} 
author : ${link[i].author}`;
        alert(linkString);
    }
};
// Add new link to the list//
const addNewLink = () => {
    let newLinkTitle = prompt("what is your new link's title?");
    let newLinkUrl = prompt("What is your url?");
    let newLinkAuthor = prompt("Who is the author?");

    // Condition if the user enter url which does not starts with `http`//
    if (!newLinkUrl.startsWith(`http://`)) {
        newLinkUrl = `http://${newLinkUrl}`;
}
        let newLink = {
            title: newLinkTitle,
            url: newLinkUrl,
            author: newLinkAuthor,
        };
        link.push(newLink);
        return;
    };
    
// All of the option to guide the user//

const menuList = `Choose an option: 
Enter (1) to show all the link lists.
Enter (2) to add a new link.
Enter (3) to remove a link.
Enter (0) to quit.`;

// Use loop to go back to the beginning//

let menuChoice = Number(prompt(menuList));
while (menuChoice !== 0) {
    switch (menuChoice) {
        case 1:
            listOflink();
            break;
        case 2:
            addNewLink();
            break;

// Choose the index to delete//

        case 3:
            let indexToDelete = Number(prompt(`Enter the index to delete`));
            let deletedLink = link.splice(indexToDelete--, 1);
            console.log(deletedLink);
            alert(`You deleted ${deletedLink[0].title}`);
            break;
        default:
            alert(`We can choose 1 to 3`);
    }
    menuChoice = Number(prompt(menuList));
};
// The program finished//
alert(`Thank you for using this program`);