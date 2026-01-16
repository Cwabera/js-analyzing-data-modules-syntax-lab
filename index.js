
// Function to merge any number of arrays of usernames
function mergeUserArrays(...userArrays) {
    // Merge all arrays into one using flat()
    const mergedUsers = userArrays.flat();

    // Create merge date
    const mergeDate = new Date().toLocaleDateString();

    // Return as an object
    return {
        mergedUsers,
        mergeDate
    };
}

// ---- Example usage ----
const teamA = ["alice", "bob", "carol"];
const teamB = ["dave", "eve"];
const teamC = ["frank", "grace", "heidi"];

const result = mergeUserArrays(teamA, teamB, teamC);

console.log(result);

module.exports = {
  ...(typeof combineUsers !== 'undefined' && { combineUsers })
};