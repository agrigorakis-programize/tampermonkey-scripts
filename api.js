(function mitosAPI() {
    'use strict';

    window.MITOS = window.MITOS || {};
    MITOS.api = MITOS.api || {};

    function apiRequest({ method = "GET", url, data = null }) {
        return new Promise((resolve, reject) => {
            
            try {
                // Fetch Authorization token
                const token = sessionStorage.getItem('authentication_access_token') || 
                              localStorage.getItem('ls.token')?.replace(/^"|"$/g, '');


                if (!token) {
                    MITOS.log.error("Could not fetch authorization token");
                    return reject(new Error("Could not fetch authorization token"));
                }

                GM_xmlhttpRequest({
                    method,
                    url,
                    headers: {
                        "Authorization": "Bearer " + token, 
                        "Content-Type": "application/json"
                    },
                    // Payload
                    data: data ? JSON.stringify(data) : null,
                    // Request
                    onload: res => {
                        MITOS.log.info("MITOS API [" + method + "] <" + url + "> | Completed " + res.status);
                        try {
                            resolve(JSON.parse(res.responseText));
                        } 
                        catch (err) {
                            MITOS.log.warn("MITOS API [" + method + "] <" + url + "> | Could not parse response data: " + err);
                            reject(err);
                        }
                    },
                    onerror: err => {
                        MITOS.log.error("MITOS API [" + method + "] <" + url + "> | Failed: " + err);
                        reject(err);
                    }
                });

            } 
            catch (err) {
                MITOS.log.error("MITOS API request error:" + err);
                reject(err);
            }
        });
    }

    MITOS.api.get = function mitosAPI_GET(url) {

        return apiRequest({ method: "GET", url });
    }

    MITOS.api.post = function mitosAPI_POST(url, data) {
        
        return apiRequest({ method: "POST", url, data });
    }

    MITOS.api.ping = function(caller = "Unknown") {
		const now = new Date();
		const dateTime = now.toLocaleString('en-GB');
		console.log(`🧩 ${dateTime} [INFO] [${caller}] API module loaded`);
	}

	MITOS.api.oAuth = function (endpoint, username, password) {
	    return new Promise((resolve, reject) => {
	        if (!endpoint || !username || !password) {
	            MITOS.log.error("OAuth | Endpoint or credentials are missing");
	            reject(new Error("Endpoint or credentials are missing"));
	            return;
	        }
	
	        const body = new URLSearchParams({
	            username: username,
	            password: password
	        }).toString();
	
	        GM_xmlhttpRequest({
	            method: "POST",
	            url: endpoint,
	            headers: {
	                "Content-Type": "application/x-www-form-urlencoded"
	            },
	            data: body,
	
	            onload: function (response) {
	                if (response.status < 200 || response.status >= 300) {
	                    MITOS.log.error(`OAuth | Authentication failed (${response.status})`);
	                    reject(new Error(`Authentication failed (${response.status})`));
	                    return;
	                }
	
	                try {
	                    const result = JSON.parse(response.responseText);
	                    const token = result.access_token;
	
	                    if (!token) {
	                        reject(new Error("OAuth | Access token missing from response"));
	                        return;
	                    }
	
	                    resolve(token);
	                } catch (error) {
	                    MITOS.log.error("OAuth | Failed to parse authentication response");
	                    reject(error);
	                }
	            },
	
	            onerror: function (error) {
	                MITOS.log.error("OAuth | Network request failed");
	                reject(error);
	            }
	        });
	    });
	};

	MITOS.log.ping("api.js");
})();
