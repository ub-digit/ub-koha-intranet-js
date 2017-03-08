(function($) {
  /* Helpers */
  function ub_koha_set_select_value_by_option_text($select, text) {
    $select.find('option').filter(function() {
      return $(this).text().trim() === text;
    }).attr('selected', 'selected');
  }

  /* Main */
  $(function() {
    // Detect stage marc import page
    if($('#tools_stage-marc-import').length) {
      // Set form values
      /*
      ub_koha_set_select_value_by_option_text(
        $('#marc_modification_template_id'),
        'TODO'
      );
      */
      ub_koha_set_select_value_by_option_text(
        $('#matcher'),
        'KohaBiblio (999$c)'
      );

      // Also hide elements where defaults should not be changed
      $('#to_marc_plugin').val('Koha::Plugin::Se::Ub::Gu::MarcImport');
      $('#overlay_action').val('replace');
      $('#nomatch_action').val('create_new');
      $('#parse_itemsyes').attr('checked', 'checked');; //Deselect #parseitemsno?
      $('#item_action').val('always_add');

      var hidden_elements = [];
      hidden_elements.push($('#marc_modification_template_id').closest('fieldset').get(0));
      hidden_elements.push($('#to_marc_plugin').closest('fieldset').get(0));
      hidden_elements.push($('#overlay_action').closest('fieldset').get(0));
      hidden_elements.push($('#parse_itemsyes').closest('fieldset').get(0));
      $(hidden_elements).hide();
    }
  });
})(jQuery);
