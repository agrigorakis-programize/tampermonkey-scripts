(function mitosERB() {
    'use strict';

    window.MITOS = window.MITOS || {};
    MITOS.erb = MITOS.erb || {};
    MITOS.erb.toolbar = MITOS.erb.toolbar || {};

    /*** HTML ***/
    function taskToolbarHTML() {
        return `
        <div id="mitos-admin-tasks-search" class="row">
            <div>
                <input class="form-control" name="ApplicationID" id="mitos-admin-tasks-input" type="text">
            </div>
            <div>
                <button type="button" id="mitos-admin-tasks-btn"><div>🔍</div></button>
            </div>
        </div>`;
    }

    function inboxToolbarHTML() {
        return `
        <div id="mitos-admin-inbox-search" class="row">
            <div>
                <input class="form-control" name="ApplicationID" id="mitos-admin-inbox-input" type="text">
            </div>
            <div>
                <button type="button" id="mitos-admin-inbox-btn"><div>🔍</div></button>
            </div>
        </div>`;
    }

    function dealSearchToolbarHTML() {
        return `
        <header>
            <h4 class="theme-color" translate="CustomerDetails">Φάκελος</h4>
            <hr>
        </header>
        <div id="mitos-admin-folder-search" class="row">
            <div class="form-group col-sm-6 col-md-3">
                <label for="FolderID">ID Φακέλου</label>
                <input name="FolderID" class="form-control" id="mitos-admin-folderid-input" type="text">
            </div>
            <div class="form-group col-sm-6 col-md-3">
                <button class="ml-5" type="button" id="mitos-admin-search-btn">🔍</button>
            </div>
        </div>`;
    }

    function dealDetailsToolbarHTML() {
            return `
            <div class='row mitos-admin-row'>
                <div class='mitos-admin-row-wrapper'>
                    <div>
                        Ροή: 
                        <a href="#" class="mitos-admin-case-link" target="_blank">
                            <span id="instance-id">N/A</span>
                        </a>
                        <button class='mitos-admin-btn' data-value='N/A'>📋</button>
                    </div>

                    <div>
                        Φάκελος: <span id="folder-id">N/A</span>
                        <button class='mitos-admin-btn' data-value='N/A'>📋</button>
                    </div>

                    <div>
                        <span id="activity-desc">N/A</span>
                    </div>
                </div>
            </div>`;
    }
    
    function dealSearchDetailsHTML() {
        return `
            <div class="mitos-erb-search-details">
                <div class="mitos-erb-search-detail">
                    <span>Φάκελος:</span>
                    <a href="#" class="mitos-erb-folder-link">N/A</a>
                    <button type="button" class="mitos-erb-btn" data-value="" title="Copy Folder ID" disabled>📋</button>
                </div>
    
                <div class="mitos-erb-search-detail">
                    <span>Ροή:</span>
                    <a href="#" class="mitos-erb-case-link" target="_blank" rel="noopener noreferrer">N/A</a>
                    <button type="button" class="mitos-erb-btn" data-value="" title="Copy Instance ID" disabled>📋</button></div>
            </div>`;
    }


    /*** CSS ***/
    function taskToolbarCSS() {
        return `
        #mitos-admin-tasks-search {
            left: 12px;
            top: 12px;
            display: inline-flex;
            position: relative;
        }

        #mitos-admin-tasks-input {
            height: 33px !important;
            min-width: 240px;
            font-size: 14px;
        }
        
        #mitos-admin-tasks-btn {
            height: 33px;
            font-size: 0.55em;
            border: 1px solid lightgray;
            position: relative;
            left: 1px;
        }

        #mitos-admin-tasks-btn:hover {
            border: 1px solid #22beef;
        }

        #mitos-admin-tasks-btn > div {
            top: 2px;
            position: relative;
        }
        `;
    }

    function inboxToolbarCSS() {
        return `
        #mitos-admin-inbox-search {
            left: 12px;
            top: 12px;
            display: inline-flex;
            position: relative;
        }

        #mitos-admin-inbox-input {
            height: 34px !important;
            min-width: 240px;
            font-size: 14px;
        }
        
        #mitos-admin-inbox-btn {
            height: 34px;
            font-size: 0.55em;
            border: 1px solid lightgray;
            position: relative;
            left: 1px;
        }

        #mitos-admin-inbox-btn:hover {
            border: 1px solid #22beef;
        }

        #mitos-admin-inbox-btn > div {
            top: 2px;
            position: relative;
        }
        `;
    }

    function dealSearchToolbarCSS() {
        return `
            .mitos-folder-header {
                margin-bottom: 12px;
            }

            .mitos-folder-title {
                margin: 0;
                font-weight: 600;
            }

            .mitos-folder-divider {
                margin-top: 8px;
            }

            #mitos-admin-folder-search {
                display: flex;
                align-items: end;
            }

            .mitos-folder-search {
                align-items: flex-end;
            }

            .mitos-folder-btn-wrapper {
                display: flex;
                align-items: flex-end;
            }

            #mitos-admin-search-btn {
                height: 30px; 
                position: relative; 
                left: -33px; 
                border: 1px solid lightgray;
            }

            #mitos-admin-search-btn:hover {
                border: 1px solid #22beef;
            }
            `;
    }

    function dealDetailsToolbarCSS() {
        return `   
            .mitos-admin-row {
                margin: 0px 24px 12px 24px;
                padding: 0px 12px;
                width: fit-content;
                float: right;
                font-size:14px;
            }

            .mitos-admin-row div:nth-child(3) {
                top: 2px;
                left: 6px;
                position: relative;
            }

            .mitos-admin-row-wrapper {
                display: flex;
                flex-flow: row;
                justify-content: end;
                align-items: center;
            }

            .mitos-admin-btn {
                padding:4px;
                margin-left:4px;
                margin-right:4px;
                border:1px solid whitesmoke;
                border-radius:6px;
                cursor: pointer;
            }

            .mitos-admin-btn:hover {
                border:1px solid lime;
            }`;
    }

    function dealSearchDetailsCSS() {
        return `
            .mitos-erb-search-details {
                display: flex;
                flex-wrap: wrap;
                align-items: center;
                gap: 6px 14px;
                font-size: 12px;
                background: #f7f7f7;
                position: relative;
                top: 8px;
                padding: 3px 12px;
                margin: -8px;
                border-radius: 4px;
            }
    
            .mitos-erb-search-detail {
                display: inline-flex;
                align-items: center;
                gap: 5px;
            }
    
            .mitos-erb-search-detail > span {
                font-weight: 600;
                white-space: nowrap;
            }
    
            .mitos-erb-search-details a {
                color: #1677b8;
                text-decoration: none;
                cursor: pointer;
            }
    
            .mitos-erb-search-details a:hover {
                text-decoration: underline;
            }
    
            .mitos-erb-btn {
                padding: 3px 5px;
                margin-left: 2px;
                border: 1px solid whitesmoke;
                border-radius: 6px;
                background: transparent;
                cursor: pointer;
            }
    
            .mitos-erb-btn:hover:not(:disabled) {
                border-color: #22beef;
            }
    
            .mitos-erb-btn:disabled {
                opacity: 0.45;
                cursor: default;
            }
        `;
    }

    /*** Events ***/
    function taskToolbarEvents() {
        const tasksFilter = document.querySelector(`a[ng-click="$ctrl.type='filter'"]`);
        const tasksSearchInput = document.querySelector('#mitos-admin-tasks-input');
        const tasksSearchBtn = document.querySelector('#mitos-admin-tasks-btn');

        tasksSearchBtn.addEventListener('click', () => {
            const appId = tasksSearchInput.value.trim();

            if (!appId) {
                tasksSearchInput.placeholder = "Please enter an Application ID";

                setTimeout(() => {tasksSearchInput.placeholder = "";}, 1000);
                return;
            }

            let currentSelect = null;
            MITOS.log.info("Apply Tasks Filtering by Application ID");

            // Enable filter
            tasksFilter.click();
            //Clear any previous search
            const clearBtn = document.querySelector("button.remove-all");
            if(clearBtn) {
                
                clearBtn.click();
            }
            setTimeout(() => {
                // Set filter criteria
                const filterSelect = document.querySelector("select[ng-model='$ctrl.selectedFilter']");
                if (filterSelect) {
                    filterSelect.selectedIndex = 9;
                    filterSelect.dispatchEvent(new Event("change", { bubbles: true }));
                }
                // Set filter comparison
                const comparisonSelect = document.querySelector("select[ng-model='$ctrl.newFilter.operator']");
                if (comparisonSelect) {
                    comparisonSelect.selectedIndex = 1;
                    comparisonSelect.dispatchEvent(new Event("change", { bubbles: true }));
                }
                // Set Application ID
                MITOS.dom.observer.element(".form-body input[application-number]", (appInput) => {
                    // Set the value
                    appInput.value = tasksSearchInput.value;

                    // Trigger AngularJS events
                    appInput.dispatchEvent(new Event("input", { bubbles: true }));
                    appInput.dispatchEvent(new Event("change", { bubbles: true }));

                    // Apply filter 
                    MITOS.dom.observer.element(".actions-placement button.btn-success", (applyBtn) => {
                        applyBtn.click();
                    });
                });
            }, 750);
        });
    }

    function inboxToolbarEvents() {
        const inboxFilter = document.querySelector(`a[ng-click="$ctrl.type='filter'"]`);
        const inboxSearchInput = document.querySelector('#mitos-admin-inbox-input');
        const inboxSearchBtn = document.querySelector('#mitos-admin-inbox-btn');

        inboxSearchBtn.addEventListener('click', () => {
            const appId = inboxSearchInput.value.trim();

            if (!appId) {
                inboxSearchInput.placeholder = "Please enter an Application ID";

                setTimeout(() => {inboxSearchInput.placeholder = "";}, 1000);
                return;
            }

            let currentSelect = null;
            MITOS.log.info("Apply Inbox Filtering by Application ID");

            // Enable filter
            inboxFilter.click();
             //Clear any previous search
            const clearBtn = document.querySelector("button.remove-all");
            if(clearBtn) {
                
                clearBtn.click();
            }
            setTimeout(() => {
                // Set filter criteria
                const filterSelect = document.querySelector("select[ng-model='$ctrl.selectedFilter']");
                if (filterSelect) {
                    filterSelect.selectedIndex = 9;
                    filterSelect.dispatchEvent(new Event("change", { bubbles: true }));
                }
                // Set filter comparison
                const comparisonSelect = document.querySelector("select[ng-model='$ctrl.newFilter.operator']");
                if (comparisonSelect) {
                    comparisonSelect.selectedIndex = 1;
                    comparisonSelect.dispatchEvent(new Event("change", { bubbles: true }));
                }
                // Set Application ID
                MITOS.dom.observer.element(".form-body input[application-number]", (appInput) => {
                    // Set the value
                    appInput.value = inboxSearchInput.value;

                    // Trigger AngularJS events
                    appInput.dispatchEvent(new Event("input", { bubbles: true }));
                    appInput.dispatchEvent(new Event("change", { bubbles: true }));

                    // Apply filter 
                    MITOS.dom.observer.element(".actions-placement button.btn-success", (applyBtn) => {
                        applyBtn.click();
                    });
                });
            }, 750);
        });
    }

    function dealSearchToolbarEvents() {
        const folderIdSearchBtn = document.querySelector('#mitos-admin-search-btn');
        const folderIdSearchInput = document.querySelector('#mitos-admin-folderid-input');

        folderIdSearchBtn.addEventListener('click', () => {
            const folderId = folderIdSearchInput.value.trim();

            if (!folderId) {
                folderIdSearchInput.placeholder = "Please enter a Folder ID";

                setTimeout(() => {folderIdSearchInput.placeholder = "";}, 1000);
                return;
            }

            // Update Route
            window.location.hash = `${MITOS.config.FolderViewHash}${folderId}/preview`;
        });
    }

    function dealDetailsToolbarEvents() {
        const buttons = document.querySelectorAll(".mitos-admin-row .mitos-admin-btn");

        buttons.forEach(btn => {
            btn.addEventListener('click', () => {
                const value = btn.dataset.value;
                navigator.clipboard.writeText(value);
                MITOS.log.info("Copied <" + value + "> to clipboard");

                btn.textContent = '✔️';

                setTimeout(() => {
                    btn.textContent = '📋';
                }, 1000);
            });
        });
    }

    function dealSearchDetailsEvents(container) {
        const buttons = container.querySelectorAll(".mitos-erb-btn");
    
        buttons.forEach(btn => {
            if (btn.dataset.eventsBound === "true") {
                return;
            }
    
            btn.dataset.eventsBound = "true";
    
            btn.addEventListener("click", async () => {
                const value = btn.dataset.value;
    
                if (!value || btn.disabled) {
                    return;
                }
    
                try {
                    await navigator.clipboard.writeText(value);
    
                    MITOS.log.info(
                        "ERB Toolbar | Copied <" + value + "> to clipboard"
                    );
    
                    const originalText = btn.textContent;
                    btn.textContent = "✔️";
    
                    setTimeout(() => {
                        if (btn.isConnected) {
                            btn.textContent = originalText;
                        }
                    }, 1000);
                } catch (err) {
                    MITOS.log.error(
                        "ERB Toolbar | Failed to copy <" + value + ">: " + err
                    );
                }
            });
        });
    }

    /*** Helpers ***/
    function fetchDealDetails(match) {
        const folderID = match[1];

        const url = `${MITOS.config.FolderViewEndpoint}?folderId=${folderID}&folderView=FolderReadOnly`;

        MITOS.api.get(url)
        .then(function (data) {
            const instanceID = data.WorkflowInfoData.CaseId ?? "N/A";
            const activityDesc = data.WorkflowInfoData.LastActivityDescription ?? "N/A";

            updateDealDetails(folderID, instanceID, activityDesc);
            MITOS.log.info(`Deal details: ${folderID} | ${instanceID} | ${activityDesc}`);
        })
        .catch(function (err) {
            MITOS.log.error(`Failed to probe Deal details for folder ${folderID}: ${err}`);
        });
    }

    function updateDealDetails(folderID, instanceID, activityDesc) {
        const appButtons = document.querySelectorAll(".mitos-admin-btn");

        document.querySelector("span#folder-id").innerHTML = folderID;
        appButtons[1].setAttribute("data-value", folderID);

        document.querySelector("span#instance-id").innerHTML = instanceID;
        appButtons[0].setAttribute("data-value", instanceID);

        const caseURI = `https://adminclient-mitos.azure.cld/apps/admin/#/Cases/Instances/${instanceID}/history/diagram?isAdHoc=0`;
        document.querySelector(".mitos-admin-case-link").setAttribute("href", caseURI);
        
        document.querySelector("span#activity-desc").innerHTML = activityDesc;
    }

    function updateDealSearchDetails(container) {
        const infoLink = container.querySelector(".infoIcon a[uib-popover]");
    
        if (!infoLink) {
            MITOS.log.warn("ERB Toolbar | Deal Search Details: Popover not found");
            return;
        }
    
        const popover = infoLink.getAttribute("uib-popover") || "";
    
        const folderMatch = popover.match(
            /(?:^|,)\s*Φάκελος\s*:\s*([^,]*)/i
        );
    
        const flowMatch = popover.match(
            /(?:^|,)\s*Ροή\s*([^,]*)/i
        );
    
        const folderID = folderMatch?.[1]?.trim() || null;
        const instanceID = flowMatch?.[1]?.trim() || null;
    
        const folderLink = container.querySelector(".mitos-erb-folder-link");
        const flowLink = container.querySelector(".mitos-erb-case-link");
        const buttons = container.querySelectorAll(".mitos-erb-btn");
    
        // Update Folder ID
        if (folderLink) {
            folderLink.textContent = folderID || "N/A";
    
            if (folderID) {
                folderLink.href = "#";
                folderLink.onclick = event => {
                    event.preventDefault();
    
                    const route = MITOS.config?.FolderViewHash;
    
                    if (!route) {
                        MITOS.log.warn(
                            "ERB Toolbar | FolderViewHash is not configured"
                        );
                        return;
                    }
    
                    window.location.hash = `${route}${folderID}/preview`;
                };
            }
        }
    
        if (buttons[0]) {
            buttons[0].dataset.value = folderID || "";
            buttons[0].disabled = !folderID;
        }
    
        // Update Instance ID
        if (flowLink) {
            flowLink.textContent = instanceID || "N/A";
    
            if (instanceID) {
                flowLink.href ="https://adminclient-mitos.azure.cld/apps/admin/#/Cases/Instances/${encodeURIComponent(instanceID)}/history/diagram?isAdHoc=0";
            } else {
                flowLink.removeAttribute("href");
            }
        }
    
        if (buttons[1]) {
            buttons[1].dataset.value = instanceID || "";
            buttons[1].disabled = !instanceID;
        }
    
        MITOS.log.info(`ERB Toolbar | Deal Search Details: Folder ${folderID || "N/A"} | Flow ${instanceID || "N/A"}`);
    }


    /*** Methods ***/
    MITOS.erb.toolbar.addTaskFilter = function renderTaskFilter() {
        MITOS.log.info("ERB Toolbar | Adding Task Filter . . .");

        if(MITOS.dom.elementExists("#mitos-admin-tasks-search")) {
            MITOS.log.info("Tasks Filter is already available");
            return;
        }

        // Inject CSS
        MITOS.dom.css(taskToolbarCSS(), "mitos-erb-tasks-search-css");
        // Inject HTML
        MITOS.dom.html("inbox-header .col-xs-8 h3", "beforeend", taskToolbarHTML());
        // Events
        MITOS.dom.observer.element("#mitos-admin-tasks-btn", taskToolbarEvents);
    }

    MITOS.erb.toolbar.addInboxFilter = function renderInboxFilter() {
        MITOS.log.info("ERB Toolbar | Adding Inbox Filter . . .");

        if(MITOS.dom.elementExists("#mitos-admin-inbox-search")) {
            MITOS.log.info("Inbox Filter is already available");
            return;
        }

        // Inject CSS
        MITOS.dom.css(inboxToolbarCSS(), "mitos-erb-inbox-search-css");
        // Inject HTML
        MITOS.dom.html("inbox-header .col-xs-8 h3", "beforeend", inboxToolbarHTML());
        // Events
        MITOS.dom.observer.element("#mitos-admin-inbox-btn", inboxToolbarEvents);
    }

    MITOS.erb.toolbar.addFolderFilter = function renderFolderFilter() {
        MITOS.log.info("ERB Toolbar | Adding Folder Filter . . .");

        if(MITOS.dom.elementExists("#mitos-admin-folder-search")) {
            MITOS.log.info("Folder Filter is already available");
            return;
        }

        // Inject CSS
        MITOS.dom.css(dealSearchToolbarCSS(), "mitos-erb-folder-search-css");
        // Inject HTML
        MITOS.dom.html("form[name='appSearchCriteriaForm'] div.form-body", "afterbegin", dealSearchToolbarHTML());
        // Events
        MITOS.dom.observer.element("#mitos-admin-folder-search", dealSearchToolbarEvents);
    }

    MITOS.erb.toolbar.addDealDetails = function renderDealDetails(match) {
        MITOS.log.info("ERB Toolbar | Deal Details . . .");

        if(MITOS.dom.elementExists(".row .mitos-admin-row")) {
            MITOS.log.info("Deal Details Toolbar is already available");
            return;
        }

        // Inject CSS
        MITOS.dom.css(dealDetailsToolbarCSS(), "mitos-erb-app-details-css");
        // Inject HTML
        MITOS.dom.html("deal-summary .tile .tile-body", "afterbegin", dealDetailsToolbarHTML());
        // Events
        MITOS.dom.observer.element(".row .mitos-admin-row", function() {
            // Events
            dealDetailsToolbarEvents();
            // Update
            fetchDealDetails(match);
        });
    }

    MITOS.erb.toolbar.addDealSearchDetails = function renderDealSearchDetails() {
        MITOS.log.info("ERB Toolbar | Deal Search Details . . .");
    
        const cardSelector = ".entity-card";
        const toolbarClass = "mitos-erb-search-details";
    
        // Inject CSS.
        MITOS.dom.css(dealSearchDetailsCSS(), "mitos-erb-search-details-css");

        function initializeCard(card) {
            // Avoid injecting duplicate controls.
            if (card.querySelector(`.${toolbarClass}`)) {
                return;
            }
    
            const infoLink = card.querySelector(".infoIcon a[uib-popover]");
    
            if (!infoLink) {
                return;
            }
    
            // Inject the toolbar into result card.
            const wrapper = document.createElement("div");
            wrapper.innerHTML = dealSearchDetailsHTML();
    
            const toolbar = wrapper.firstElementChild;
    
            if (!toolbar) {
                return;
            }
    
            card.appendChild(toolbar);
    
            // Bind copy events and populate the values.
            dealSearchDetailsEvents(toolbar);
            updateDealSearchDetails(card);
        }
    
        // Process all result cards.
        function processCards() {
            document.querySelectorAll(cardSelector).forEach(initializeCard);
        }
    
        processCards();
    
        const observer = new MutationObserver(() => {
            processCards();
        });
    
        observer.observe(document.body, {
            childList: true,
            subtree: true
        });
    
        MITOS.log.info("ERB Toolbar | Deal Search Details initialized");
    };

    MITOS.log.ping("erb.js");
})();
