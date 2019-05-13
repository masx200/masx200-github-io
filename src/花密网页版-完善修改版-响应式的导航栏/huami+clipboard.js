function countCode() {
  	var password = $("#password").val();
  	var key = $("#key").val();
  	if (password && key) {
  		var md5one = $.md5(password, key);
  		var md5two = $.md5(md5one, 'snow');
  		var md5three = $.md5(md5one, 'kise');

  		var rule = md5three.split("");
  		var source = md5two.split("");
  		for (var i = 0; i <= 31; i++) {
  			if (isNaN(source[i])) {
  				str = "sunlovesnow1990090127xykab";
  				if (str.search(rule[i]) > -1) {
  					source[i] = source[i].toUpperCase();
  				}
  			}
  		}
  		var code32 = source.join("");
  		var code1 = code32.slice(0, 1);
  		if (isNaN(code1)) {
  			var code16 = code32.slice(0, 16);
  		} else {
  			var code16 = "K" + code32.slice(1, 16);
  		}

  		$("#code16").val(code16);
  	}
  }
  $(function() {

  	$('#password').change(countCode);
  	$('#key').change(countCode);
  	$('#password').keyup(countCode);
  	$('#key').keyup(countCode);

  	$('#code16').mouseover(function() {
  		$('#copycode16').addClass("copycode16h");
  		$('#code16').addClass("code16h");

  	})
  	$('#code16').mouseout(function() {
  		$('#copycode16').removeClass("copycode16h");
  		$('#code16').removeClass("code16h");
  	})
  	$('#copycode16').mouseover(function() {
  		$('#copycode16').addClass("copycode16h");
  		$('#code16').addClass("code16h");
  	})
  	$('#copycode16').mouseout(function() {
  		$('#copycode16').removeClass("copycode16h");
  		$('#code16').removeClass("code16h");
  	})
  	$('#copycode16').click(function() {
  		if ($("#code16").val()) {
  			$('#copyOK').show();
  			$('#copyOK').fadeTo(0, 0).css("border-color", "#22B614").css("background-color", "#22B614").fadeTo('normal', 1)
  				.fadeTo(2000, 1).fadeTo(3000, 0, function() {
  					$('#copyOK').hide();
  				});
  		}

  	})

  });
  // </script>
  //  <script defer>
  $(function() {
  	var clipboard = new ClipboardJS('.btn');

  	clipboard.on('success', function(e) {
        if (!e.text) {
            console.log("复制内容空")
        } else {
            console.info("Action:", e.action);
            console.info("Text:", e.text);
        }
  		// console.info('Action:', e.action);
  		// console.info('Text:', e.text);

  		e.clearSelection();
  	});

  	clipboard.on('error', function(e) {
  		console.error('Action:', e.action);
  		console.error('Trigger:', e.trigger);
  	});
  	$('#copyOK').hide();
  })
