//your JS code here. If required.
let button = document.getElementById("removeBtn");
        let select = document.getElementById("colorSelect");

        // Add event listener to button
        button.addEventListener("click", function() {
            let selectedValue = select.value;  
            let selectedIndex = select.selectedIndex; 

            if (selectedIndex !== -1) {  // Ensure an option is selected
                // alert("Selected color: " + selectedValue); // Show selected value
                select.remove(selectedIndex); // Remove selected option
            }
        });