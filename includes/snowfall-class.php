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
  		echo '<canvas id="snowArea">
		   Snowing... </canvas>';

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

		?>

		<!-- TITLE -->
	<p>

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
		return $instance;
	}

} // class Foo_Widget
