  <!-- Level0.svelte -->
<script>
  function closeWindow() {
    window.close();
  }
</script>

<div class="lvl0">
<h1 style="text-align: center; font-size: 24px; font-weight: bold;">Level 0</h1>
<div class="description">
  <p>Individuals at this level have minimal to no exposure to generative AI but are aware of its existence and potential applications</p>
  <h2>Proficiency Indicators:</h2>
  <ul>
    <li>Recognizes the term "generative AI" and its basic premise</li>
    <li>Has a general understanding that AI systems can generate new content, such as images, text, or music</li>
    <li>May have encountered generative AI applications in popular media or news articles</li>
  </ul>
</div>

</div>

<style>
.lvl0 {
  font-family: Arial, sans-serif;
  background-color: #f0f0f0;
  padding: 20px;
  width: auto; /* Adjust the width dynamically based on content */
  max-width: 80%; /* Limit the maximum width */
  max-height: 80%; /* Limit the maximum height */
  overflow-y: auto; /* Add vertical scrollbar if needed */
  border: 1px solid #ccc;
  border-radius: 5px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  margin: 0 auto; /* Center the container horizontally */
}
.description {
  margin-bottom: 20px;
}
</style>

  