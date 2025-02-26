// IF - ELSE IF - ELSE Statements

let userRole = "admin";
let accessLevel;

if (userRole === "admin") {
    accessLevel = "Full access granted";
} else if (userRole === "manager") {
    accessLevel = "Limited access granted";
} else {
    accessLevel = "No access granted";
}

console.log("Access Level:", accessLevel); // Output: "Full access granted"

// NESTED IF ELSE Statements

let isLoggedIn = true;
let userMessage;

if (isLoggedIn) {
    if (userRole === "admin") {
        userMessage = "Welcome, Admin!";
    } else {
        userMessage = "Welcome, User!";
    }
} else {
    userMessage = "Please log in to access the system.";
}

console.log("User Message:", userMessage); // Output: "Welcome, Admin!"

// SWITCH Statements
let userType = "subscriber";
let userCategory;

switch (userType) {
    case "admin":
        userCategory = "Administrator";
        break;
    case "manager":
        userCategory = "Manager";
        break;
    case "subscriber":
        userCategory = "Subscriber";
        break;
    default:
        userCategory = "Unknown";
}

console.log("User Category:", userCategory); // Output: "Subscriber"

// TERNARY Operator
let isAuthenticated = true;

let authenticationStatus = isAuthenticated ? "Authenticated" : "Not authenticated";

console.log("Authentication Status:", authenticationStatus); // Output: "Authenticated"

// PRACTICE TASK
let role = "Employee";

switch (role) {
    case "Employee":
        console.log("Access to Dietary Services.");
        break;
    case "Enrolled Member":
        console.log("Access to Dietary Services + 1 on 1 with a Dietitian.");
        break;
    case "Subscriber":
        console.log("Partial Access to Dietary Services.");
        break;
    default:
        console.log("Need to Enroll or Subscribe to access Dietary Services.");
}
