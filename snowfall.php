<?php
/*
Plugin Name: Snowfall
Plugin URI: http://bh0.github.io
Description: Make it snow on your website
Version: 1.0.0
Author: BH0
Author URI: http://bh0.github.io
*/

if(!defined('ABSPATH')) {
  exit;
}

require_once(plugin_dir_path(__FILE__).'/includes/snowfall-scripts.php');

require_once(plugin_dir_path(__FILE__).'/includes/snowfall-class.php');

function register_snowfall() {
    register_widget('Snowfall_Widget');
}

add_action('widgets_init', 'register_snowfall');
