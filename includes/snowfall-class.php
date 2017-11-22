<?php
/**
 * Adds Foo_Widget widget.
 */
class Snowfall_Widget extends WP_Widget {

	/**
	 * Register widget with WordPress.
	 */
	function __construct() {
		parent::__construct(
			'snowfall_widget', // Base ID
			esc_html__( 'Snowfall', 'sf_domain' ), // Name
			array( 'description' => esc_html__( 'Make it snow', 'sf_domain' ), ) // Args
		);
	}

	/**
	 * Front-end display of widget.
	 *
	 * @see WP_Widget::widget()
	 *
	 * @param array $args     Widget arguments.
	 * @param array $instance Saved values from database.
	 */
	public function widget( $args, $instance ) {
		echo $args['before_widget'];
		if ( ! empty( $instance['title'] ) ) {
			echo $args['before_title'] . apply_filters( 'widget_title', $instance['title'] ) . $args['after_title'];
		}

		/// Widget Content Output


        /* echo '<div id="snowArea"><script src="file-path-to-main.js"></script>
         Snowing... </div>'; // output may go here
         */
		 /*
         echo '<div id="snowArea"><script src="../../main.js"></script>
          Snowing... </div>'; // output may go here
		  */
		  echo '<div id="snowArea">
		   Snowing... </div>';

		//echo esc_html__( 'Snowfall', 'sf_domain' );
		echo $args['after_widget'];
	}

	/**
	 * Back-end widget form.
	 *
	 * @see WP_Widget::form()
	 *
	 * @param array $instance Previously saved values from database.
	 */
	public function form( $instance ) {
		/*** The data entered in the following HTML form/s should be sent to JSON file ***/
		$title = ! empty( $instance['title'] ) ? $instance['title'] : esc_html__( 'Snowfall', 'sf_domain' );
		?>
		<!--
		<h3>AJAX POST FORM</h3>
	    <form id="postForm">
	      <input type="text" name="name" id="name2">
	      <input type="submit" value="Submit">
	  </form> -->

	  <!--
	  <head>
		  <script src="https://ajax.aspnetcdn.com/ajax/jQuery/jquery-3.2.1.min.js"></script>
	  </head>
	  <form>
    		<input type="text" id="name" name="name">
    		<button type="submit" id="submit-btn">
		</form>
	    <script>
		/*
		document.onload = function() {
	      document.getElementById('postForm').addEventListener('submit', postName);

	      function postName(e){
	        e.preventDefault();
			//e.stopImmediatePropagation();

			var name = document.getElementById('name2').value;
	        var params = "name="+name;

	        var xhr = new XMLHttpRequest();
	        xhr.open('POST', 'process.php', true);
	        xhr.setRequestHeader('Content-type', 'application/x-www-form-urlencoded');

	        xhr.onload = function(){
	          console.log(this.responseText);
	        }

	        xhr.send(params);
	      }
	  }
	  *

	  $(document).ready(function() {
		  $('#submit-btn').on('click', function(e) {
	    	e.preventDefault();
	    	if( $('#name').val() ){
	        	$.ajax({
	            	url     : 'savejson.php',
	            	method  : 'post',
	            	data    : { 'name': $('#name').val() },
	            		success : function( response ) {
	                		alert( response );
	            		}
	        		});
	    		}
			});
		});
		*/
	  </script>
  		-->

		<?php
	}

	/**
	 * Sanitize widget form values as they are saved.
	 *
	 * @see WP_Widget::update()
	 *
	 * @param array $new_instance Values just sent to be saved.
	 * @param array $old_instance Previously saved values from database.
	 *
	 * @return array Updated safe values to be saved.
	 */
	public function update( $new_instance, $old_instance ) {
		$instance = array();
		$instance['title'] = ( ! empty( $new_instance['title'] ) ) ? strip_tags( $new_instance['title'] ) : '';

		return $instance;
	}

} // class Foo_Widget
