document.getElementById("commentForm").addEventListener("submit", function(e) {
    e.preventDefault(); // Prevent page reload on form submission

    const commentText = document.getElementById("commentInput").value;
    
    if(commentText.trim() !== "") {
        const commentSection = document.getElementById("commentSection");

        // Create a new comment element
        const newComment = document.createElement("div");
        newComment.classList.add("comment");
        newComment.innerHTML = <p>${commentText}</p>;

        // Append the new comment to the comment section
        commentSection.appendChild(newComment);

        // Clear the input field after submitting
        document.getElementById("commentInput").value = "";
    }
});
