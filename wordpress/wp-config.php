<?php
/**
 * The base configuration for WordPress
 *
 * The wp-config.php creation script uses this file during the
 * installation. You don't have to use the web site, you can
 * copy this file to "wp-config.php" and fill in the values.
 *
 * This file contains the following configurations:
 *
 * * MySQL settings
 * * Secret keys
 * * Database table prefix
 * * ABSPATH
 *
 * @link https://wordpress.org/support/article/editing-wp-config-php/
 *
 * @package WordPress
 */

// ** MySQL settings - You can get this info from your web host ** //
/** The name of the database for WordPress */
define( 'DB_NAME', 'wordpress' );

/** MySQL database username */
define( 'DB_USER', 'wordpress' );

/** MySQL database password */
define( 'DB_PASSWORD', 'wordpress' );

/** MySQL hostname */
define( 'DB_HOST', 'localhost' );

/** Database Charset to use in creating database tables. */
define( 'DB_CHARSET', 'utf8' );

/** The Database Collate type. Don't change this if in doubt. */
define( 'DB_COLLATE', '' );

/**
 * Authentication Unique Keys and Salts.
 *
 * Change these to different unique phrases!
 * You can generate these using the {@link https://api.wordpress.org/secret-key/1.1/salt/ WordPress.org secret-key service}
 * You can change these at any point in time to invalidate all existing cookies. This will force all users to have to log in again.
 *
 * @since 2.6.0
 */
define( 'AUTH_KEY',          'JVA/<35b6v/0CXxERF|PH y[]Y0GY*uY/a-C%y~diuQ;X}HHGK7Ur*K}*>fIC}f!' );
define( 'SECURE_AUTH_KEY',   '4OO`3*D7PdnB*dB ^,f?j|E,aLB>{$*/JP.VohZ7K@}drHtk78a/E)=*^(3_DL-v' );
define( 'LOGGED_IN_KEY',     'w|Q#H1~._nXo(LR_WGUBoS+X1Yd<}5&w#d649%0uVL&MRPzJ?ilMXcQ#H jaP-`i' );
define( 'NONCE_KEY',         'dbECA=FTn)ss^(,a!^iTaO|?7.T#x6(:eOUe`*RMh)Hi> P$%,3@CL814wz#9Vr8' );
define( 'AUTH_SALT',         '(6{2s(DS^j#m s@{aj7_C[1w_>p1{]MP,8Tp8fb<IX~&PmubG8Dz*Gl7l4%W1u%-' );
define( 'SECURE_AUTH_SALT',  '7_:TsG zSF|!^}q>}914?F- PLK]BOm~:)[<5vYq)r;Kbd>/2#r|#RQ1U?J$2:|n' );
define( 'LOGGED_IN_SALT',    ';MX5@=D12cE?|{h-*mEQsOFg]J7I7W5{a0, =jC#-Nm#T7gzf1>|RY@O]$-40~xP' );
define( 'NONCE_SALT',        '_*WmO :y h]r# 7L=6851nbMujQ(flG;hoqC&[wKSVhu;+HA!$3v|X8ueB@+w~L}' );
define( 'WP_CACHE_KEY_SALT', ' &8>NTROA|*?bz]Urey7|I!7jGu4v)a$*#/ZR(v~{-ZA|,~9mhEX~V%@j-!K0YHr' );

/**
 * WordPress Database Table prefix.
 *
 * You can have multiple installations in one database if you give each
 * a unique prefix. Only numbers, letters, and underscores please!
 */
$table_prefix = 'wp_';


define( 'JETPACK_DEV_DEBUG', True );
define( 'WP_DEBUG', True );
define( 'FORCE_SSL_ADMIN', False );
define( 'SAVEQUERIES', False );

// Additional PHP code in the wp-config.php
// These lines are inserted by VCCW.
// You can place additional PHP code here!


/* That's all, stop editing! Happy publishing. */

/** Absolute path to the WordPress directory. */
if ( ! defined( 'ABSPATH' ) ) {
	define( 'ABSPATH', dirname( __FILE__ ) . '/' );
}

/** Sets up WordPress vars and included files. */
require_once ABSPATH . 'wp-settings.php';
