$(document).ready(function () {
  $("#project_info").keyup(function () {
    const charCount = $(this).val().length;
    const remainingChars = 500 - charCount;
    $(this).next("#count").html(remainingChars);
  });
});
