$(document).ready(function () {
  $("#project_info").keyup(function () {
    const charCount = $(this).val().length;
    const remainingChars = 500 - charCount + "/500";
    $(this).next("#count").html(remainingChars);
  });
});
