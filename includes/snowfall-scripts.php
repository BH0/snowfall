<?php
function sf_add_scripts(){
  wp_enqueue_style('sf-main-style', plugins_url(). '/snowfall/css/style.css');
  wp_register_script('sf-main-script', plugins_url(). '/snowfall/js/main.js', array(), NULL, true);
  wp_enqueue_script('sf-main-script');

  $snowfall_custom = array( 'template_url' => get_bloginfo('template_url'), 'plugin_url' => plugins_url() . '/snowfall/' );
  wp_localize_script( 'sf-main-script', 'snowfall_custom', $snowfall_custom );

}

add_action('wp_enqueue_scripts', 'sf_add_scripts');

/*
function sf_add_scripts(){
    wp_enqueue_style('sf-main-style', plugins_url(). '/snowfall/css/style.css');
    wp_register_script('sf-main-script', plugins_url(). '/snowfall/js/main.js', array(), NULL, true);
    wp_enqueue_script('sf-main-script');

    $snowfall_custom = array( 'template_url' => get_bloginfo('template_url') );
    wp_localize_script( 'sf-main-script', 'snowfall_custom', $snowfall_custom );
  }
add_action('wp_enqueue_scripts', 'sf_add_scripts');
*/
/*
  function sf_add_scripts(){
    wp_enqueue_style('sf-main-style', plugins_url(). '/snowfall/css/style.css');

    wp_enqueue_script('sf-main-script', plugins_url(). '/snowfall/js/main.js');

    //wp_localize_script( 'some_handle', plugins_url(). '/snowfall/js/options.js' );

    //wp_localize_script( 'sf-main-script', 'options', plugins_url(). '/snowfall/js/options' );

    //wp_enqueue_script( 'sf-main-script' );
    //wp_enqueue_script( 'options.json' );

    //wp_enqueue_script('options');
  }
  add_action('wp_enqueue_scripts', 'sf_add_scripts');

  // Enqueued script with localized data.
//  wp_enqueue_script( 'some_handle' );

/*
wp_register_script('main-script', WP_PLUGIN_URL.'/snowfall/js/main.js',array(),NULL,true);
wp_enqueue_script('main-js');

$wnm_custom = array( 'template_url' => get_bloginfo('template_url') );
wp_localize_script( 'main-js', 'wnm_custom', $wnm_custom );
*/

/*
wp_register_script('main.js',WP_PLUGIN_URL.'/snowfall/js/main.js',array(),NULL,true);
wp_enqueue_script('main.js');

$wnm_custom = array( 'template_url' => get_bloginfo('template_url') );
wp_localize_script( 'main.js', 'snowfall_custom', $wnm_custom );
*/
