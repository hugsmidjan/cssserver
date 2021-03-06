export interface AppConfig {
	/**
	 *
	 * Port number that the CSS server runs on.
	 *
	 * NOTE: This setting can be overridedn by setting the env
	 * variables NODE_PORT or PORT.
	 *
	 * Default: `4000`
	 */
	port: number;

	/**
	 * Path to the folder containing the server's static webroot.
	 *
	 * Default: `"public/"`
	 * */
	staticFolder: string;

	/**
	 * Cache-Control max-age (in seconds) for static CSS files
	 * and other assets (fonts, images, etc.).
	 *
	 * A value of `0` disables the HTTP caching
	 *
	 * Default: `86400` (24 hours)
	 */
	ttl_static: number;

	/**
	 * Cache-Control max-age (in seconds) for CSS bundling results.
	 *
	 * A value of `0` disables the HTTP caching
	 *
	 * Default: `3600`  (1 hour)
	 */
	ttl_bundle: number;

	/**
	 * Magic bundle URL suffix that starts a cache-staleness check.
	 * Calls to that endpoint always return a 500 invalid module.
	 *
	 * Default: `undefined`
	 */
	cacheRefreshToken?: string | null;

	/**
	 * Disable the server's internal caching (Useful during rapid CSS development)
	 *
	 * NOTE: This DOES NOT affect the Cache-Control headers set to the browser.
	 *
	 * Default: `true`
	 */
	cache?: boolean;

	/**
	 * Is the server proxied behind another server/proxy
	 * that provides **SSL and compression**?
	 *
	 * Setting `proxied` to true
	 *  - Turns off gzip compression
	 *  - Disables SSL (thus obviating the `ssl*` options below)
	 *  - Switches server to HTTP/1.1 (because lack of SSL keys)
	 *
	 * Default: `false`
	 */
	proxied: boolean;

	/**
	 * Path leading to the SSL key/cert files.
	 * Allows providing a file-name prefix so folder-names
	 * **must** include a trailing slash
	 *
	 * Example 1: `"../keys/my-"` results in:
	 * ```txt
	 *     ../keys/my-privkey.pem
	 *     ../keys/my-cert.pem
	 * ```
	 * Example 2: `"/foo/bar/"` results in:
	 * ```txt
	 *    /foo/bar/privkey.pem
	 *    /foo/bar/cert.pem
	 * ```
	 *
	 * Default: `null`  (Uses unsigned cert/key files bundled with the server)
	 */
	sslKeyPath?: string | null;

	/**
	 * Full path to the SSL certificate file
	 *
	 * Defaults: `sslKeyPath + 'cert.pem'`  (Falling back the bundled unsigned certs)
	 */
	sslCert?: string | null;

	/**
	 * (Optional) Full path to the SSL private key file
	 *
	 * Defaults: `sslKeyPath + 'privkey.pem'`  (Falling back the bundled unsigned privkey)
	 */
	sslPrivkey?: string | null;

	/**
	 * Controls if the server (loudly) throws an error on bad CSS module tokens
	 * or if it simply outputs a silent warning as a CSS comment
	 *
	 * Default: `process.env.NODE_ENV !== 'production'`
	 */
	loudBadTokenErrors?: boolean;
}
