const dummyCaseData = {
    case_number: "UPHC01",
    category: "civil",
    complexity_legal_issues: 3,
    novelty_legal_issues: 2,
    public_interest: "high",
    urgency: "moderate",
    cooperation: "high",
    legal_representation: "moderate",
    experience_judges_lawyers: "high",
    num_parties: 5,
    amount_evidence: 100,
    num_witnesses: 10,
    num_documents: 50,
    length_pleadings: "Medium",
    num_legal_issues: 4,
    time_required_hearing: "2 hours"
};

// Function to populate form fields with case information
function populateFormFields(data) {
    document.getElementById("category").value = data.category;
    document.getElementById("complexity_legal_issues").value = data.complexity_legal_issues;
    document.getElementById("novelty_legal_issues").value = data.novelty_legal_issues;
    document.getElementById("public_interest").value = data.public_interest;
    document.getElementById("urgency").value = data.urgency;
    document.getElementById("cooperation").value = data.cooperation;
    document.getElementById("legal_representation").value = data.legal_representation;
    document.getElementById("experience_judges_lawyers").value = data.experience_judges_lawyers;
    document.getElementById("num_parties").value = data.num_parties;
    document.getElementById("amount_evidence").value = data.amount_evidence;
    document.getElementById("num_witnesses").value = data.num_witnesses;
    document.getElementById("num_documents").value = data.num_documents;
    document.getElementById("length_pleadings").value = data.length_pleadings;
    document.getElementById("num_legal_issues").value = data.num_legal_issues;
    document.getElementById("time_required_hearing").value = data.time_required_hearing;
}

// Event listener for the "Fetch" button
document.getElementById("fetchButton").addEventListener("click", function () {
    const caseNumber = document.getElementById("case_number").value;
    
    // In a real application, you would fetch case information from a server using AJAX.
    // For this example, we'll use the dummyCaseData.
    if (caseNumber === dummyCaseData.case_number) {
        populateFormFields(dummyCaseData);
    } else {
        alert("Case not found. Please enter a valid case number.");
    }
});