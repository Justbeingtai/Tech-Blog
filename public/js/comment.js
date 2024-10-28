document.querySelector('#comment-form').addEventListener('submit', async (event) => {
  event.preventDefault();

  const comment_text = document.querySelector('#comment').value.trim();
  const blog_id = window.location.pathname.split('/').pop();

  if (comment_text) {
    const response = await fetch(`/api/comments`, {
      method: 'POST',
      body: JSON.stringify({ comment_text, blog_id }),
      headers: { 'Content-Type': 'application/json' },
    });

    if (response.ok) {
      document.location.reload();
    } else {
      alert('Failed to post comment');
    }
  }
});
