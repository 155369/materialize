
  document.addEventListener('DOMContentLoaded', function() {
    var sidenav = document.querySelectorAll('.sidenav');
    var ins_sid = M.Sidenav.init(sidenav, {});

    var select = document.querySelectorAll('select');
    var ins_sel = M.FormSelect.init(select, {});

    var autocomplete = document.querySelectorAll('.autocomplete');
    var ins_aut = M.Autocomplete.init(autocomplete, {});
  });
