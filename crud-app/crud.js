
let students = [];
const Base_URL = "http://localhost:8080";

window.onload = () => {
    getAllStudents();
}


function getFormData() {
    return {
        name: document.getElementById('name').value,
        email: document.getElementById('email').value,
    };
}




async function addStudent() {
    const student = getFormData();

    if (!student.name || !student.email) {
        alert("Fill all Fields");
        return;
    }


    if (updateId === null) {

        const response = await fetch(`${Base_URL}/save`, {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(student)
        });

        if (!response.ok) {
            alert("Failed to add");
            return;
        }
        alert("Added Successfully");

    } else {
        // Update logic
        const response = await fetch(`${Base_URL}/update/${updateId}`, {
            method: "PUT",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(student)});
        if (!response.ok) {
            alert("Failed to update");
            return;
        }
        alert("Updated Successfully");
        updateId = null;
    }
    clearForm();
    getAllStudents();
}


async function getAllStudents() {
    try {
        const response = await fetch(`${Base_URL}/getAll`);
        const students = await response.json();
        displayStudents(students);

    } catch (error) {
        console.error("Error fetching Students :", error);
        alert("Unable to add results.")
    }
}

function displayStudents(students) {
    const tableBody = document.getElementById("table-body");
    tableBody.innerHTML = "";

    students.forEach((stud, index) => {
        const row = `
        <tr>
        <td>${index + 1}</td>
        <td>${stud.name}</td>
        <td>${stud.email}</td>
          <td>
            <button onclick="deleteStudent(${stud.id})" class="btn btn-danger btn-sm">🚮</button>
            <button onclick="editStudent(${stud.id})" id="update-btn" class="btn btn-edit btn-sm">✏️</button>
                </td>
        </tr>`
        tableBody.innerHTML += row;
    });


}

async function deleteStudent(id) {
    if (!confirm("Are you sure you want to delete?")) {
        return;
    }
    try {
        const response = await fetch(`${Base_URL}/delete/${id}`, {
            method: "DELETE" });
        if (!response.ok) {
            alert("Failed to delete");
            return;
        }
        alert("Record deleted successfully");
        getAllStudents();
    } catch (error) {
        console.error("Error occured while deleting:", error);
        alert("Error deleting student");
    }
}

let updateId = null;

function editStudent(id) {
    fetch(`${Base_URL}/get/${id}`).then
        (res => res.json()).then(stud => {
            document.getElementById('name').value = stud.name;
            document.getElementById('email').value = stud.email;
            updateId = stud.id;
        });
        
        document.getElementById("submit-btn").textContent="Update";
}


function clearForm() {
    document.getElementById('name').value = "";
    document.getElementById('email').value = "";
}
