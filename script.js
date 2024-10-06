const medicineSuggestions = [
    {
        symptom: "Headache",
        medicines: [
            {
                name: "Paracetamol",
                dosage: "500mg every 4-6 hours",
                sideEffects: ["Nausea", "Dizziness"],
                form: "Tablet",
                price: "₹20",
                
            }
        ]
    },
    {
        symptom: "Fever",
        medicines: [
            {
                name: "Paracetamol",
                dosage: "500mg every 4-6 hours",
                sideEffects: ["Nausea", "Liver issues with prolonged use"],
                form: "Tablet",
                price: "₹20",
            }
        ]
    },
    {
        symptom: "Cough",
        medicines: [
            {
                name: "Dextromethorphan",
                dosage: "10-20mg every 4 hours",
                sideEffects: ["Drowsiness", "Dizziness"],
                form: "Syrup",
                price: "₹40"
            }
        ]
    },
    {
        symptom: "Cold",
        medicines: [
            {
                name: "Cetirizine",
                dosage: "10mg once daily",
                sideEffects: ["Drowsiness", "Dry mouth"],
                form: "Tablet",
                price: "₹15"
            }
        ]
    },
    {
        symptom: "Stomach Pain",
        medicines: [
            {
                name: "Dicyclomine",
                dosage: "20mg every 6-8 hours",
                sideEffects: ["Dry mouth", "Drowsiness"],
                form: "Tablet",
                price: "₹30"
            }
        ]
    },
    {
        symptom: "Allergy",
        medicines: [
            {
                name: "Loratadine",
                dosage: "10mg once daily",
                sideEffects: ["Drowsiness", "Headache"],
                form: "Tablet",
                price: "₹25"
            }
        ]
    },
    {
        symptom: "Diarrhea",
        medicines: [
            {
                name: "Loperamide",
                dosage: "2mg after each loose stool",
                sideEffects: ["Constipation", "Dizziness"],
                form: "Tablet",
                price: "₹15"
            }
        ]
    },
    {
        symptom: "Heartburn",
        medicines: [
            {
                name: "Ranitidine",
                dosage: "150mg twice daily",
                sideEffects: ["Headache", "Dizziness"],
                form: "Tablet",
                price: "₹30"
            }
        ]
    },
    {
        symptom: "Nausea",
        medicines: [
            {
                name: "Ondansetron",
                dosage: "4mg every 8 hours as needed",
                sideEffects: ["Headache", "Constipation"],
                form: "Tablet",
                price: "₹50"
            }
        ]
    },
    {
        symptom: "Fatigue",
        medicines: [
            {
                name: "Vitamin B12",
                dosage: "1000mcg once daily",
                sideEffects: ["Mild diarrhea", "Itching"],
                form: "Tablet",
                price: "₹100"
            }
        ]
    },
    {
        symptom: "Muscle Pain",
        medicines: [
            {
                name: "Ibuprofen",
                dosage: "200mg every 6-8 hours",
                sideEffects: ["Stomach pain", "Nausea"],
                form: "Tablet",
                price: "₹30"
            }
        ]
    },
    {
        symptom: "Insomnia",
        medicines: [
            {
                name: "Melatonin",
                dosage: "3mg before bedtime",
                sideEffects: ["Drowsiness", "Headache"],
                form: "Tablet",
                price: "₹200"
            }
        ]
    },
    {
        symptom: "Sore Throat",
        medicines: [
            {
                name: "Throat lozenges",
                dosage: "As needed",
                sideEffects: ["Mouth irritation"],
                form: "Lozenge",
                price: "₹10"
            }
        ]
    },
    {
        symptom: "Anxiety",
        medicines: [
            {
                name: "Escitalopram",
                dosage: "10mg once daily",
                sideEffects: ["Nausea", "Drowsiness"],
                form: "Tablet",
                price: "₹150"
            }
        ]
    },
    {
        symptom: "Constipation",
        medicines: [
            {
                name: "Polyethylene Glycol",
                dosage: "17g once daily",
                sideEffects: ["Bloating", "Nausea"],
                form: "Powder",
                price: "₹40"
            }
        ]
    },
    {
        symptom: "Skin Rash",
        medicines: [
            {
                name: "Hydrocortisone Cream",
                dosage: "Apply to affected area twice daily",
                sideEffects: ["Burning", "Itching"],
                form: "Cream",
                price: "₹150"
            }
        ]
    }
];


function suggest(){

    const symptomDropdown = document.getElementById("symptom");
    const selectedAge = document.getElementById("select2");
    const selectedSymptom = symptomDropdown.value;
     const medicineList = document.getElementById("medicine-list");

 
     medicineList.innerHTML = "";


    const suggestion= medicineSuggestions.find( s => s.symptom.toLowerCase().replace(" ", "-")  === selectedSymptom.toLowerCase());

    if (suggestion) {
        const medicine = suggestion.medicines[0];
       const medicineDiv = document.createElement("div");
       medicineDiv.classList.add("medicine-item");
       const mprice = document.createElement("mprice")  

       medicineDiv.innerHTML = `
       <h3>${medicine.name}</h3>
       <p><span>Dosage:</span> ${medicine.dosage}</p>
       <p><span>Form:</span> ${medicine.form}</p>
       <p><span>Side Effects:</span> ${medicine.sideEffects.join(", ")}</p>
       <p><span>Price:</span> ${medicine.price}</p>
        <p><span class="mprice">Check Latest Price</span></p>`;
       
      
      
       const priceElement = medicineDiv.querySelector(".mprice");
       
        priceElement.addEventListener("click", function() {
            window.open("https://www.1mg.com/", "_blank");
        });

        medicineList.appendChild(medicineDiv);
    }


    else{
        medicineList.innerHTML = "<p>No suggestions available for this symptom.</p>";
    }


}

document.getElementById("suggest-btn").addEventListener("click", suggest);
var  feedback = document.querySelector("#feedback");
var giticon =document.querySelector(".giticon");

feedback.addEventListener("click",function(){
    window.open("mailto:sanketagrawal6969@gmail.com")
})

giticon.addEventListener("click",function(){
    window.open("https://github.com/Sanketagrawal08")
})

