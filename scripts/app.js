// Element Definition
let addNumberOne    = document.getElementById('addNumberOne');
let addNumberTwo    = document.getElementById('addNumberTwo');
let addNumberOutput = document.getElementById('addNumberOutput');
let addNumberButton = document.getElementById('addNumberButton');

let questionOne       = document.getElementById('questionOne');
let questionOneOutput = document.getElementById('questionOneOutput');
let questionOneButton = document.getElementById('questionOneButton');

let questionTwo       = document.getElementById('questionTwo');
let questionTwoOutput = document.getElementById('questionTwoOutput');
let questionTwoButton = document.getElementById('questionTwoButton');

let compareNumberOne    = document.getElementById('compareNumberOne');
let compareNumberTwo    = document.getElementById('compareNumberTwo');
let compareNumberOutput = document.getElementById('compareNumberOutput');
let compareNumberButton = document.getElementById('compareNumberButton');

let fieldOne   = document.getElementById('fieldOne');
let fieldTwo   = document.getElementById('fieldTwo');
let fieldThree = document.getElementById('fieldThree');
let fieldFour  = document.getElementById('fieldFour');
let fieldFive  = document.getElementById('fieldFive');
let fieldSix   = document.getElementById('fieldSix');
let fieldSeven = document.getElementById('fieldSeven');
let fieldEight = document.getElementById('fieldEight');
let fieldNine  = document.getElementById('fieldNine');
let fieldTen   = document.getElementById('fieldTen');

let storyOutput       = document.getElementById('storyOutput');
let fieldSubmitButton = document.getElementById('fieldSubmitButton');  

let numberOE       = document.getElementById('numberOE');
let numberOEOutput = document.getElementById('numberOEOutput');
let numberOEButton = document.getElementById('numberOEButton');

let reverseNum       = document.getElementById('reverseNum');
let reverseNumOutput = document.getElementById('reverseNumOutput');
let reverseNumButton = document.getElementById('reverseNumButton');

let reverseABC       = document.getElementById('reverseABC');
let reverseABCOutput = document.getElementById('reverseABCOutput');
let reverseABCButton = document.getElementById('reverseABCButton');

let ballQuestion       = document.getElementById('ballQuestion');
let ballQuestionOutput = document.getElementById('ballQuestionOutput');
let ballQuestionButton = document.getElementById('ballQuestionButton');

let restaurantPickOne       = document.getElementById('restaurantPickOne');
let restaurantPickOneOutput = document.getElementById('restaurantPickOneOutput');
let restaurantPickOneButton = document.getElementById('restaurantPickOneButton');

let restaurantPickTwo       = document.getElementById('restaurantPickTwo');
let restaurantPickTwoOutput = document.getElementById('restaurantPickTwoOutput');
let restaurantPickTwoButton = document.getElementById('restaurantPickTwoButton');

let restaurantPickThree       = document.getElementById('restaurantPickThree');
let restaurantPickThreeOutput = document.getElementById('restaurantPickThreeOutput');
let restaurantPickThreeButton = document.getElementById('restaurantPickThreeButton');

let nameEnter = document.getElementById('nameEnter');
let nameEnterOutput = document.getElementById('nameEnterOutput');
let nameEnterButton = document.getElementById('nameEnterButton');


// Function Definition //
const addNumberFetch = async () => {
    const promise = await fetch(`https://allfourone.azurewebsites.net/TwoNumber/AddTwoNumbers/${addNumberOne.value}/${addNumberTwo.value}`);
    const data = await promise.text();

    if (addNumberOutput !== null) {
        addNumberOutput.textContent = data;
    }
}
if (addNumberButton !== null) {
    addNumberButton.addEventListener('click', function() {
        addNumberFetch();
    });
}

const questionOneFetch = async () => {
    const promise = await fetch(`https://allfourone.azurewebsites.net/AskQuestion/AskFirstQuestion/${questionOne.value}`);
    const data = await promise.text();

    if (questionOneOutput !== null) {
        questionOneOutput.textContent = data;
    }
}
if (questionOneButton !== null) {
    questionOneButton.addEventListener('click', function() {
        questionOneFetch();
    });
}

const questionTwoFetch = async () => {
    const promise = await fetch(`https://allfourone.azurewebsites.net/AskQuestion/AskSecondQuestion/${questionTwo.value}`);
    const data = await promise.text();

    if (questionTwoOutput !== null) {
        questionTwoOutput.textContent = data;
    }
}
if (questionTwoButton !== null) {
    questionTwoButton.addEventListener('click', function() {
        questionTwoFetch();
    });
}

const compareNumberFetch = async () => {
    const promise = await fetch(`https://allfourone.azurewebsites.net/GreaterOrLess/GreaterOrLessThan/${compareNumberOne.value}/${compareNumberTwo.value}`);
    const data = await promise.text();

    if (compareNumberOutput !== null) {
        compareNumberOutput.textContent = data;
    }
}
if (compareNumberButton !== null) {
    compareNumberButton.addEventListener('click', function() {
        compareNumberFetch();
    });
}

const MadLibFetch = async () => {
    const promise = await fetch(`https://allfourone.azurewebsites.net/MadLib/CreateStory/${fieldOne.value}/${fieldTwo.value}/${fieldThree.value}/${fieldFour.value}/${fieldFive.value}/${fieldSix.value}/${fieldSeven.value}/${fieldEight.value}/${fieldNine.value}/${fieldTen.value}`);
    const data = await promise.text();

    if (storyOutput !== null) {
        storyOutput.textContent = "Story so far: " + data;
    }
}
if (fieldSubmitButton !== null) {
    fieldSubmitButton.addEventListener('click', function() {
        MadLibFetch();
    });
}

const OddEvenFetch = async () => {
    const promise = await fetch(`https://allfourone.azurewebsites.net/OddEven/OddOrEven/${numberOE.value}`);
    const data = await promise.text();

    if (numberOEOutput !== null) {
        numberOEOutput.textContent = data;
    }
}
if (numberOEButton !== null) {
    numberOEButton.addEventListener('click', function() {
        OddEvenFetch();
    });
}

const ReverseNumFetch = async () => {
    const promise = await fetch(`https://allfourone.azurewebsites.net/ReverseNum/ReverseNum/${reverseNum.value}`);
    const data = await promise.text();

    if (reverseNumOutput !== null) {
        reverseNumOutput.textContent = data;
    }
}
if (reverseNumButton !== null) {
    reverseNumButton.addEventListener('click', function() {
        ReverseNumFetch();
    });
}

const ReverseABCFetch = async () => {
    const promise = await fetch(`https://allfourone.azurewebsites.net/reverseABC/reverseABC/${reverseABC.value}`);
    const data = await promise.text();

    if (reverseABCOutput !== null) {
        reverseABCOutput.textContent = data;
    }
}
if (reverseABCButton !== null) {
    reverseABCButton.addEventListener('click', function() {
        ReverseABCFetch();
    });
}

const EightBallFetch = async () => {
    const promise = await fetch(`https://allfourone.azurewebsites.net/EightBall/AskQuestion/${ballQuestion.value}`);
    const data = await promise.text();

    if (ballQuestionOutput !== null) {
        ballQuestionOutput.textContent = data;
    }
}
if (ballQuestionButton !== null) {
    ballQuestionButton.addEventListener('click', function() {
        EightBallFetch();
    });
}

const CategoryCountryFetch = async () => {
    const promise = await fetch(`https://allfourone.azurewebsites.net/RestaurantPicker/CategoryOrigin/${restaurantPickOne.value}`);
    const data = await promise.text();

    if (restaurantPickOneOutput !== null) {
        restaurantPickOneOutput.textContent = data;
    }
}
if (restaurantPickOneButton !== null) {
    restaurantPickOneButton.addEventListener('click', function() {
        CategoryCountryFetch();
    });
}

const CategoryFoodFetch = async () => {
    const promise = await fetch(`https://allfourone.azurewebsites.net/RestaurantPicker/CategoryFood/${restaurantPickTwo.value}`);
    const data = await promise.text();

    if (restaurantPickTwoOutput !== null) {
        restaurantPickTwoOutput.textContent = data;
    }
}
if (restaurantPickTwoButton !== null) {
    restaurantPickTwoButton.addEventListener('click', function() {
        CategoryFoodFetch();
    });
}

const CategoryRatingFetch = async () => {
    const promise = await fetch(`https://allfourone.azurewebsites.net/RestaurantPicker/CategoryRating/${restaurantPickThree.value}`);
    const data = await promise.text();

    if (restaurantPickThreeOutput !== null) {
        restaurantPickThreeOutput.textContent = data;
    }
}
if (restaurantPickThreeButton !== null) {
    restaurantPickThreeButton.addEventListener('click', function() {
        CategoryRatingFetch();
    });
}

const NameGreetingFetch = async () => {
    const promise = await fetch(`https://allfourone.azurewebsites.net/Greeting/GetName/${nameEnter.value}`);
    const data = await promise.text();

    if (nameEnterOutput !== null) {
        nameEnterOutput.textContent = data;
    }
}
if (nameEnterButton !== null) {
    nameEnterButton.addEventListener('click', function() {
        NameGreetingFetch();
    });
}