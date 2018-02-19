define({"71":{i:0.0125505675553675,u:"../developing_with_spryker/module_guide/checkout_process/checkout/checkout_placing_the_order.html",a:"After the customer clicks the submit button during the SummaryStep, the PlaceOrderStep is started. This step takes the QuoteTransfer` and starts the checkout workflow to store the order into the system. Zed Checkout modulecontains a number of plugins where you can add additional behavior, check ...",t:"Placing the Order — Checkout"},"72":{i:0.00176350835741711,u:"../developing_with_spryker/module_guide/checkout_process/oms/oms.html",a:"Many start ups in the eCommerce world have gone through an automation approach of their order processing as described by Fabian Wesner in his blog post ( Introduction to Automated Order Management for E-commerce Startups ). They have started highly manually: every step from order to fulfillment was ...",t:"OMS"},"73":{i:0.0021119701740946,u:"../developing_with_spryker/module_guide/checkout_process/oms/patterns.html",a:"Process Patterns The  State Machine Cook Book  describes how to build a state machine with the elements state, transition and event. However there are some recurring design problems that are needed in many processes. In this article common problems and their solution with state machine snippets are ...",t:"State Machine Patterns"},"74":{i:0.00467306236504692,u:"../developing_with_spryker/module_guide/checkout_process/refund/refund.html",a:"Refund Refund manages the retour refund process. Overview RefundFacade contains the following methods: calculateRefund(array $salesOrderItems, SpySalesOrder $salesOrderEntity) calculates refundable amount for the sales order saveRefund(RefundTransfer $refundTransfer) persists the calculated refund ...",t:"Refund"},"75":{i:0.00336876925885114,u:"../developing_with_spryker/module_guide/checkout_process/refund/refund_2_0.html",a:"The latest version of this module can be found here  Refund The Refund module manages the retours refund process. Overview Using  Refund  Extending  Refund  Overview RefundFacade contains the following methods: calculateRefund(array $salesOrderItems, SpySalesOrder $salesOrderEntity) calculates ...",t:"Refund 2.0"},"76":{i:0.0111001274507304,u:"../developing_with_spryker/module_guide/checkout_process/sales/sales.html",a:"The Sales module provides the order management functionality. The functionality is obtained through the ZED UI that renders orders with orders details and the Client API to get customer orders. Getting totals for order To get the Order with totals, the facade method ...",t:"Sales"},"77":{i:0.0100470261812095,u:"../developing_with_spryker/module_guide/checkout_process/sales/sales_5_0.html",a:"The latest version of this module can be found here  Sales Getting totals for order Spryker does not store order grand total or subtotal amounts; all amounts are stored before calculation, order items store single item gross amounts, discounts store single item discount amount. To get the discount ...",t:"Sales 5.0"},"78":{i:0.00464521642626442,u:"../developing_with_spryker/module_guide/checkout_process/shipment/shipment.html",a:"Shipping details can be configured from Zed backend application and are being managed by the Shipment module. Zed enables the basic operations (Create/Update/Delete) for carriers and it allows to update the list of shipping methods assigned to each carrier. Shipping Carrier - company that provides ...",t:"Shipment"},"79":{i:0.00254593009713965,u:"../developing_with_spryker/module_guide/checkout_process/shipment/shipment_overview.html",a:"The main concepts regarding shipping that are modeled in the database are : shipment carrier shipment method The shipment method is linked to the sales order. The schema below shows how these entities are modeled in the database : A sales order has associated a shipment method. Each shipment method ...",t:"Shipment Overview"},"80":{i:0.00463526332044634,u:"../developing_with_spryker/module_guide/checkout_process/shipment/shipment_overview_2.html",a:"The main concepts regarding shipping that are modeled in the database are : shipment carrier shipment method The schema below shows how the sales order and shipment method entities are modeled in the database: A sales order has an associated sales shipment entity which has an associated sales ...",t:"Shipment  Overview 2.0"},"81":{i:0.0039973200578406,u:"../developing_with_spryker/module_guide/checkout_process/shipment/shipment_methods_plugins.html",a:"The main concerns regarding shipping services are : availability : is the shipping method available to deliver the order? price : how is the delivery price calculated ? delivery time : when will the order be delivered ? For each of these concerns, an optional plugin is linked to each shipping method ...",t:"Shipment Methods Plugins"},"82":{i:0.00193583091077237,u:"../developing_with_spryker/module_guide/checkout_process/cart.html",a:"Our Cart consists of a few components in Yves and Zed. The Yves components  create the cart requests and persist the cart into the session. The Zed components  persist the data into the database and expand the items with data obtained from plugins. Cart operations are invoked in CartClient, which ...",t:"Cart"},"83":{i:0.00177535422131845,u:"../developing_with_spryker/module_guide/checkout_process/payment.html",a:"\nMultiple payments\n Spryker enables to have multiple payments per checkout, payments are stored in QuoteTransfer::payments and persisted when CheckoutClient::placeOrder is called in last checkout step. \nEach payment method must provide payment amount it shares from order grand total. This amount is ...",t:"Payment"},"84":{i:0.000628280225058446,u:"../developing_with_spryker/module_guide/checkout_process/dummy_payment.html",a:"Do not use this code for production but you can use it as a starting point for new payment integrations. What is the DummyPayment for: it brings a simple state machine it shows how to integrate payment into the system it shows how to handle refunds it allows to test checkout process in several ways ...",t:"Dummy Payment"},"85":{i:0.00343494092904833,u:"../developing_with_spryker/module_guide/content_management/cms/cms.html",a:"Content Management System The content management system (CMS) is a lightweight tool used for publishing, editing and modifying the content displayed in Yves. In Spryker, the CMS manages content such as pages and blocks and keeps track of URL redirects. You can immediately start using the content ...",t:"CMS"},"86":{i:0.00119616541406923,u:"../developing_with_spryker/module_guide/content_management/cms_widget/cms_widget.html",a:"\n\t\t\tCMS content widgets is a new CMS feature for adding  dynamic content to CMS pages/blocks.\n\t\t For example, you can list a single product, product lists, product groups or product sets.\n\t\t Integration First of all you need to install the cms-content-widget module with Composer (update ...",t:"CMS - Content Widget"},"87":{i:0.00110007829132329,u:"../developing_with_spryker/module_guide/content_management/cms_widget/available_widgets.html",a:"Currently there are four widgets provided by default in Spryker shop: Product (abstract), Product Set, Product Group and Product Search. They can be found in Administration Interface under Content Management-\u003ePage-\u003e Edit Placeholders-\u003e Content tab. The rules for widget creation are provided in Cms ...",t:"Available Widgets"},"88":{i:0.00310207003657386,u:"../developing_with_spryker/module_guide/content_management/cms/cms_glossary.html",a:"CMS Glossary    See also: CMS - Creating a New Page CMS - Preview Draft Page CMS Block CMS Versioning CMS  CMS - URL Redirects   Last review date: Sep. 20th, 2017\n",t:"CMS Glossary "},"89":{i:0.00577276743901308,u:"../developing_with_spryker/module_guide/content_management/cms/cms_block_multistore.html",a:"Overview The multi-store CMS block feature enables you to manage CMS blocks display per stores through a store toggle element on CMS Block management pages in the Administration Interface. By default CMS Blocks are available in all stores. This feature provides additional configuration when you have ...",t:"Multi-store CMS Block"},"90":{i:0.00354153670015732,u:"../developing_with_spryker/module_guide/content_management/cms/cms_preview_draft_page.html",a:"Previewing draft version allows to check the saved draft version in Yves before publishing it. Prerequisites Upgrade spryker/cms module to at least 6.2 version. Additional information on how to migrate the spryker/cms module can be found  here . If you have spryker/cms-collector module installed, ...",t:"CMS - Preview Draft Page"},"91":{i:0.000628280225058446,u:"../developing_with_spryker/module_guide/content_management/glossary/glossary.html",a:"The Glossary module has the responsibility to manage glossary keys that hold the localized content in the database. For each entry in the glossary keys table there is a corresponding entry in the Touch table that has a timestamp that marks the last update that was made on that glossary keys that ...",t:"Glossary"},"92":{i:0.000790985246296315,u:"../developing_with_spryker/module_guide/content_management/glossary/glossary_keys.html",a:"Glossary keys present two layers of persistence: SQL database storage in-memory key-value storage (Redis) In this section we’ll exemplify the usage of the functionality for managing the glossary keys from the backoffice user interface and the usage of them for the Yves interface through twig ...",t:"Managing Glossary Keys"},"93":{i:0.000790985246296315,u:"../developing_with_spryker/module_guide/content_management/glossary/glossary_keys_use.html",a:"One of the usages of the glossary keys in the front office application (Yves) is for rendering translated content. For allowing to render translated content, a dedicated extension for the twig template engine is available to be used. You can see bellow how you can add translated content in Yves  ...",t:"Using Glossary Keys"},"94":{i:0.000790985246296315,u:"../developing_with_spryker/module_guide/content_management/glossary/glossary_translations.html",a:"The key concept for rendering web pages with translated content very fast and with limited resource usage is using a key-value storage. Yves has no connection to Zed’s SQL database and it fetches all dynamic data from a key-value storage(Redis) and a search engine(Elasticsearch). This data contains ...",t:"How Translations are Managed - Glossary"},"95":{i:0.00094791448339962,u:"../developing_with_spryker/module_guide/customer_management/customer/about_customer.html",a:"The following modules are used to establish customer centric functionality. Academy Navigation To navigate through content, click on an option from the right-hand table of contents or use the search (above).  You can also use navigation buttons on the top right corner of page:  Navigate previous ...",t:"About Customer"},"96":{i:0.000899783616768153,u:"../developing_with_spryker/module_guide/customer_management/wishlist/wishlist.html",a:"The Wishlist module is very straight forward and easy to use. A Customer has a default wishlist, which will be created first time when there is a request made to manage its items. There is only one wishlist per customer by default, however one customer can have multiple named wishlists, if required. ...",t:"Wishlist"},"97":{i:0.000612971928980752,u:"../developing_with_spryker/module_guide/customer_management/wishlist/wishlist_items_mgmt.html",a:"addItem(WishlistItemTransfer $wishlistItemTransfer) Adds item to wishlist. Required values: fkCustomer, fkProduct. Optional: wishlistName. In case wishlist name is not provided the default value will be used. \u003c?php\n$wishlistItemTransfer = (new WishlistItemTransfer())\n    -\u003esetWishlistName(\u0027foobar\u0027)\n ...",t:"Wishlist Items Management"},"98":{i:0.000612971928980752,u:"../developing_with_spryker/module_guide/customer_management/wishlist/wishlist_management.html",a:"createWishlist(WishlistTransfer $wishlistTransfer) Creates wishlist for a specific customer with given name. Required values: name, fkCustomer. \u003c?php\n$wishlistTransfer = (new WishlistTransfer())\n    -\u003esetName(\u0027foobar\u0027)\n    -\u003esetFkCustomer(1);\n\n$wishlistTransfer = ...",t:"Wishlist Management"},"99":{i:0.000612971928980752,u:"../developing_with_spryker/module_guide/customer_management/wishlist/wishlist_schema.html",a:"Wishlist Schema As is the concept of the wishlist, the schema is also very straightforward. A customer can have multiple wishlists, which can have multiple items.",t:"Wishlist Schema"},"100":{i:0.00079441004928836,u:"../developing_with_spryker/module_guide/customer_management/customer/customer.html",a:"The customer entity wraps data around registered customers. Customer data is managed from the backend application (Zed) and frontend application (Yves). Customer Address One customer can have many customer addresses stored in the database. There are two types of customer addresses: Billing Address: ...",t:"Customer"},"101":{i:0.00497214534519829,u:"../developing_with_spryker/module_guide/discount/discount.html",a:"Discount The Discount module is responsible for managing discounts in the Spryker OS. Overview In the diagram below you can see how the discount details are stored in the database: The spy_discount_voucher_pool table purpose is to group the vouchers codes generated for each discount. You can ...",t:"Discount"},"102":{i:0.00276927831645549,u:"../developing_with_spryker/module_guide/discount/discount_applying.html",a:"There are two ways of applying a discount to an order : for cart rule discounts : these discounts are contained in the cart and are calculated automatically for voucher code discounts : these discounts must be added by the customer and they are calculated once they are entered Cart Rule Discounts ...",t:"Applying a Discount"},"103":{i:0.00180521788975756,u:"../developing_with_spryker/module_guide/discount/discount_calculator_plugin.html",a:"Once the discountable items are collected, there are 2 ways to calculate the discounted value. Depending on the calculator_plugin linked to the discount, we identify: PLUGIN_CALCULATOR_FIXED - fixed amount discount ( e.g. 10€ off) the currency in which the discount is calculated is the currency ...",t:"Discount Calculator Plugin"},"104":{i:0.00121673953621553,u:"../developing_with_spryker/module_guide/discount/discount_excl_nonexcl.html",a:"Exclusive and Non-Exclusive Discounts Discounts that have the Is_Exclusive flag set with value true cannot be combined. If the cart includes more than one exclusive discount, only the discount that offers the highest discounted value will be applied. If the cart includes a mix of exclusive and ...",t:"Exclusive and Non-exclusive Discounts"},"105":{i:0.00121673953621553,u:"../developing_with_spryker/module_guide/discount/discount_ext_module.html",a:"The main components that describe a discount are: discount collector: Specifies for which items discount is being applied/calculated. Example: The discount can be applied for a specific set of products or for orders that contain a minimum number of items or for orders that have a minimum grand total ...",t:"Extending the Discount Module"},"106":{i:0.00128461538414296,u:"../developing_with_spryker/module_guide/discount/discount_promotion.html",a:"\n           For marketing reasons shops sometimes give away free products depending on the cart content. This could be for example when the cart value is high to give away some free perks.\n           Or for example when the customer buys certain product to give away some other product that is ...",t:"Discount Promotion"},"107":{i:0.000612971928980752,u:"../developing_with_spryker/module_guide/engines/about_engines.html",a:"The following modules are Engines. Academy Navigation To navigate through content, click on an option from the right-hand table of contents or use the search (above).  You can also use navigation buttons on the top right corner of page:  Navigate previous button takes you the page preceding the one ...",t:"About Engines"},"108":{i:0.0041402209909085,u:"../developing_with_spryker/module_guide/engines/state_machine/state_machine.html",a:"The StateMachine module provides generic implementation for state machines (SM). This module provides functionality for drawing the SM graph, triggering events, initializing a new state machine or for getting the state history for a processed item.   If you are looking for information on the OMS ...",t:"State Machine"},"109":{i:0.00386708993091479,u:"../developing_with_spryker/module_guide/engines/state_machine/state_machine_cronjob.html",a:"There are three console commands dedicated for the state machine: state-machine:check-condition - checks all the states that have a condition without event and triggers them. state-machine:check-timeout - check timeout expired items and triggers event for them. state-machine:clear-locks - clears ...",t:"Cron Jobs - State Machine"},"110":{i:0.00383911192246413,u:"../developing_with_spryker/module_guide/engines/state_machine/state_machine_events.html",a:"There are two main triggers: first one StateMachineFacade::triggerForNewStateMachineItem() is used when first time triggering the state machine for an item; this trigger will initialize the state machine and start transition through states until a decision without event, timeout or manual event is ...",t:"Triggering Events - State Machine"},"111":{i:0.00383911192246413,u:"../developing_with_spryker/module_guide/engines/state_machine/state_machine_implementing_plugin.html",a:"To start using state machine, you need create a new plugin by implementing the  StateMachineHandlerInterface. This plugin is used when there is need for additional information from client or some action happens and the client needs to be notified about it. List of interface methods that need to be ...",t:"Implementing the Plugin - State Machine"},"112":{i:0.00383911192246413,u:"../developing_with_spryker/module_guide/engines/state_machine/state_machine_modelling.html",a:"States How are the states modelled in XML? A list of state elements can be easily defined in an XML file, as in the example below. A state is defined by a name. The display attribute allows to link a glossary key that contains the name of the state for the locales configured in the application, as ...",t:"Modelling - State Machine"},"113":{i:0.00383911192246413,u:"../developing_with_spryker/module_guide/engines/state_machine/state_machine_persistence.html",a:"To persist the state of the item and make the connection with the state machine, you need to store related data into the database. For example, you can create two fields (idStateMachineState(int) and idStateMachineProcess(int)) and store their id’s when itemStateUpdated is being triggered.   See ...",t:"Persistence - State Machine"},"114":{i:0.00383911192246413,u:"../developing_with_spryker/module_guide/engines/state_machine/state_machine_zed_presentation.html",a:"To add manual trigger button or history for items, you need to add some implementation. State machine provides methods for triggering events and for retrieving history. StateMachineFacade::processedStateMachine(StateMachineItemTransfer[]) updates the given array of items with data from state machine ...",t:"Updating Presentation in Zed - State Machine"},"115":{i:0.000715118199535739,u:"../developing_with_spryker/module_guide/engines/step_engine/step_engine.html",a:"The StepEngine module provides an easy way to define multi-step pages with forms. Using this module you can define Steps and additionally you can link forms to interact with the user. This is useful in handling the checkout process where you can define multiple steps, such as: select payment method; ...",t:"Step Engine"},"116":{i:0.000734542435225626,u:"../developing_with_spryker/module_guide/engines/step_engine/step_engine_breadcrumb.html",a:"To set up breadcrumb navigation for a step collection, first you’ll need to mark which steps you would like to have in your breadcrumb. To mark a step available for breadcrumb just implement \\Spryker\\Yves\\StepEngine\\Dependency\\Step\\StepWithBreadcrumbInterface in all the necessary steps. The ...",t:"Breadcrumb Navigation - Step Engine"},"117":{i:0.000734542435225626,u:"../developing_with_spryker/module_guide/engines/step_engine/step_engine_define_step.html",a:"When adding a new step, you must implement the StepInterface. The StepInterface defines all the methods that StepEngine needs when executing a step: preCondition() - here you define the requirements for the step to get executed requireInput() - here you define if the step requires user input (e.g. ...",t:"Defining a Step - Step Engine"},"118":{i:0.000734542435225626,u:"../developing_with_spryker/module_guide/engines/step_engine/step_engine_use_case_scenario.html",a:"Below you can see an example of configuration for the checkout process, containing two steps: an entry step and a success step. Click to expand the code sample \u003c?php\nnamespace Pyz\\Yves\\Checkout;\n\nuse Pyz\\Yves\\Checkout\\Form\\FormFactory;\nuse ...",t:"Use Case Scenario - Step Engine"},"119":{i:0.000734542435225626,u:"../developing_with_spryker/module_guide/engines/step_engine/step_engine_workflow.html",a:"When you need to define a multi-step process using the StepEngine feature, you need to implement the following interfaces: StepInterface - here you implement the logic that needs to get executed when the defined step takes place SubFormInterface - defines the name of the form and the pathProperty ...",t:"Step Engine Workflow"},"120":{i:0.000612971928980752,u:"../developing_with_spryker/module_guide/infrastructure/about_infrastructure.html",a:"The following modules are used to establish the supporting infrastructure.   Academy Navigation To navigate through content, click on an option from the right-hand table of contents or use the search (above).  You can also use navigation buttons on the top right corner of page:  Navigate previous ...",t:"About Infrastructure"},"121":{i:0.00637353277875933,u:"../developing_with_spryker/module_guide/infrastructure/collector/collector.html",a:"The Collector module provides functionality to aggregate data from an SQL database, and synchronize with a NoSQL data store, in a format that can be easily consumed by front-end application.\n\n See  Performance and Scalability  for an overview of the separation of responsibilities between Yves and ...",t:"Collector"},"122":{i:0.00318567195656051,u:"../developing_with_spryker/module_guide/infrastructure/collector/collector_development.html",a:"The Collector module provides mechanisms to manage data consumed by front-end application.\n\nTo populate the data stores, 4 steps are required:\n\n Touch\n \nConfigure\n Collect\n Touch\n In order for anything to be synchronized, first it has to be marked (touched) via the  Touch mechanism . Each collector ...",t:"Development - Collector"},"123":{i:0.00318567195656051,u:"../developing_with_spryker/module_guide/infrastructure/collector/collector_running.html",a:"Each Collector is executed once for each Locale that’s configured in the Store. To see the currently configured locales, check the stores.php configuration file.\n\nThere are three commands which handle collectors related tasks.\n\n console collector:search:export\nconsole collector:search:update\nconsole ...",t:"Running Collectors"},"124":{i:0.00318567195656051,u:"../developing_with_spryker/module_guide/infrastructure/collector/collector_sched_collector_jobs.html",a:"The cronjob file jobs.php stores the configuration related to collectors.\n\n \u003c?php\n$jobs[] = [\n    \u0027name\u0027 =\u003e \u0027export-search\u0027,\n    \u0027command\u0027 =\u003e \u0027$PHP_BIN vendor/bin/console collector:search:export\u0027,\n    \u0027schedule\u0027 =\u003e \u0027*/10 * * * *\u0027,\n    \u0027enable\u0027 =\u003e false,\n    \u0027stores\u0027 =\u003e $allStores,\n];\n?\u003e In the ...",t:"Scheduling Collector Jobs"},"125":{i:0.00318567195656051,u:"../developing_with_spryker/module_guide/infrastructure/collector/collector_types.html",a:"Data Collection\n\nData aggregation is a complex process of transforming scattered data between different resources, into a new one, usually smaller then the input. There are two basic Collector Types, depending on the way the data is being collected.\n\n AbstractPdoCollector - uses PHP Data Objects ...",t:"Collector Types"},"126":{i:0.00600093439371356,u:"../developing_with_spryker/module_guide/infrastructure/event/event.html",a:"The Event module implements an Observer pattern where you can add hooks (events) to your code and allow other bundles to listen and react to those events.\n\n There are two methods:\n\n Traditional Synchronous where listeners are handled at the same time as they are dispatched\n Asynchronous (Queueable) ...",t:"Event"},"127":{i:0.0050160698264706,u:"../developing_with_spryker/module_guide/infrastructure/event/event_adding.html",a:"When adding an event, make sure you first decide what kind of events you want to trigger in your code. Events are stored in a class for later use, by adding its literal string value (BundleName.subject.action). This value uniquely identifies an event in the event module, and all listeners attached ...",t:"Adding Events"},"128":{i:0.0050160698264706,u:"../developing_with_spryker/module_guide/infrastructure/event/event_asynch.html",a:"Asynchronous Events An asynchronous event can be created by using the addListenerQueued method instead of addListener. The difference is that it queues the event to be processed later by another process/consumer. You must have queue configured before using this feature, see bellow.",t:"Asynchronous Events"},"129":{i:0.0050160698264706,u:"../developing_with_spryker/module_guide/infrastructure/event/event_configure_q.html",a:"Implementation is already present in demoshop and all code samples can be found there. To implement an events queue: Click to expand the code sample \u003c?php\nnamespace Pyz\\Client\\RabbitMq;\n\nuse ArrayObject;\nuse Generated\\Shared\\Transfer\\RabbitMqOptionTransfer;\nuse ...",t:"Configuring an Events Queue"},"130":{i:0.0050160698264706,u:"../developing_with_spryker/module_guide/infrastructure/event/event_listen.html",a:"There are two ways to listen to events, using direct listeners or subscribers. The difference between these two is that a subscriber allows the module providing the subscriber to wire up the handlers in the module that owns it without touching the EventDependencyProvider exception’s initial ...",t:"Listening to Events"},"131":{i:0.0050160698264706,u:"../developing_with_spryker/module_guide/infrastructure/event/event_priority.html",a:"The Event Collector \\Spryker\\Service\\Event\\Dependency\\EventCollectionInterface uses a priority queue store events so each that event can have different priority and will be executed in correct order when triggered. For example: \u003c?php\n$eventCollection\n    ...",t:"Listener Priority"},"132":{i:0.00408610544182726,u:"../developing_with_spryker/module_guide/infrastructure/file_system/filesystem.html",a:" The FileSystem Service provides an abstraction for file systems. It uses the same interface to access different types of file systems, regardless of their location or protocol. The Flysystem module provides plugins which  thephpleague/flysystem  vendor package and implement FileSystem\u0027s plugin ...",t:"File System "},"133":{i:0.00408610544182726,u:"../developing_with_spryker/module_guide/infrastructure/file_system/filesystem_api.html",a:"Read API  getMetadata(FileSystemQueryTransfer $fileSystemQueryTransfer) Return FileSystemResourceMetadataTransfer, null on failure \u003c?php\n$fileSystemQueryTransfer = new ...",t:"File System API"},"134":{i:0.000628280225058446,u:"../developing_with_spryker/module_guide/infrastructure/console.html",a:"A console command is a php class that contains the implementation of a functionality that can get executed from the command line. Spryker contains a wrapper over Symfony’s Console component, that makes the implementation and configuration of a console command easier. More information about console ...",t:"Console"},"135":{i:0.000628280225058446,u:"../developing_with_spryker/module_guide/infrastructure/errorhandler.html",a:"The Spryker OS uses a dedicated error handling mechanism to collect detailed error related information. The ErrorHandler handles notices, warnings and other types of minor issues usually not thrown as exceptions as strict as more serious errors. By default, they all throw meaningful exceptions for ...",t:"ErrorHandler"},"136":{i:0.000612971928980752,u:"../developing_with_spryker/module_guide/infrastructure/installer.html",a:"The Installer module is responsible of managing the installment process of required database data. Plugin Stack You define the installer plugins of the bundles you want to include in the Pyz ImporterDependencyProvider: \u003c?php\nnamespace Pyz\\Zed\\Installer;\n\nuse ...",t:"Installer"},"137":{i:0.000690544326612097,u:"../developing_with_spryker/module_guide/infrastructure/sequence_number.html",a:"\n    Sometimes it should be ensured for a project that the just generated number is not used for the same purpose twice.\n    Spryker provides Sequence Number module which handles the unique number generation.\n General Usage The sequence number facade contains ::generate() method which provides a ...",t:"Sequence Number"},"138":{i:0.00300185034032789,u:"../developing_with_spryker/module_guide/infrastructure/touch.html",a:"Yves has no connection to the database of Zed. This is a key concept to make rendering front-end pages fast. Yves fetches all dynamic data from a key-value storage (Redis) and a search engine (Elasticsearch).\n\n This data includes, but is not limited to:\n\n URL mappings\n Product Information\n Product ...",t:"Touch"},});