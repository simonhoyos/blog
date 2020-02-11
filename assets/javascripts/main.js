function sharePopup(url, width, height) {
  // Calculate the position of the popup so it’s centered on the screen.
  var left = (screen.width / 2) - (width / 2),
      top = (screen.height / 2) - (height / 2);

  window.open(url, "", "menubar=no,toolbar=no,resizable=yes,scrollbars=yes,width=" + width + ",height=" + height + ",top=" + top + ",left=" + left);
}

$(function() {
  $(".btn-share").on("click", function(e) {
    e.preventDefault();
    sharePopup($(this).attr("href"), 500, 300);
  });

  $('.search-button').on('click', function(e) {
    e.preventDefault();

    if ($("#search-input").val() === "") {
      $('.search').toggleClass('open');
    }
    $('#search-input').focus();
  });

  var search;
  function configureSearch(posts) {
    search = new JsSearch.Search('url');
    search.addIndex('title');
    search.addIndex('url');
    search.addIndex('excerpt');
    search.addDocuments(posts);

    $('#search-input').on('keyup', handleKeyUp);
  }

  function handleSearch(value) {
    $('.posts').hide();
    var results = search.search(value);

    $('.search-results').empty()
    if (results.length == 0) {
      $('.search-results').append('<p class="text-center no-results">No se encontraron resultados :(</p>')
    } else {
      var template = Handlebars.compile($('#posts-template').html());
      var html = template({ posts: results })
      $('.search-results').html(html).show();

    }
    $('.search-results').show()
  }

  function handleKeyUp(e) {
    var value = $(this).val();
    if (value === "") {
      $('.search-results').hide()
      $('.posts').show();
    } else {
      handleSearch(value);
    }
  }

  $.getJSON("/search.json")
    .done(function(data) {
      configureSearch(data);
    }).fail(function(err) {
      console.log(err);
    });
});
