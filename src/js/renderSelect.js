import moment from "moment";

const roomsSelect = [
    {
        id: "room",
        options: [
            {
                value: "2xlux",
                name: "Двомісний люкс"
            },
            {
                value: "3x",
                name: "Трьохмісний номер"
            },
            {
                value: "2x",
                name: "Двохмісний номер"
            }
        ]
    }
]

const firstDate = document.querySelector('.js-select#first-date');
// console.log(firstDate);

// console.log(moment().format("DD.MM.YYYY"));


function renderSelect() {
    // let markup;
    // if(select.id === "room") {
    //     markup = 
    // }

    
    let markup = []
    let date = moment().format("DD.MM.YYYY");
    for (let i = 0; i < 10; i++) {
        // const element = array[i];
        console.log(date);
        if(i === 0) {
            markup.push(`<option value="first-date" selected>${date}</option>`)
        }
        else {
            date = moment(date).add(1, 'days').format("DD.MM.YYYY");
            console.log(date);
            markup.push(`<option value="date">${date}</option>`)
        }
    }

    firstDate.innerHTML = markup.join('')
}

renderSelect();