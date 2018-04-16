define({"342":{i:0.000737270438062347,u:"../developing_with_spryker/industry_partner_integration/billpay/integration_payment_billpay_payment_methods.html",a:"Refer to Billpay payment information ( https://www.billpay.de/en/business-clients/payment-information/ ) for information about payment methods. The identity and credit check are checked within a single \"pre-authorize\" call after summary page was submitted.\n           This may lead to the “rejection” ...",t:"Billpay Invoice Payment in Preauthorize Mode"},"343":{i:0.00336852893061026,u:"../developing_with_spryker/industry_partner_integration/braintree/integration_payment_braintree.html",a:"Braintree provides two methods of payment: Credit Card PayPal In order to integrate Braintree payments, a Braintree merchant account should be created and configuration data then could be obtained from Braintree. There are two types of accounts for the integration: test accounts live accounts Both ...",t:"Payment Integration — Braintree (BETA)"},"344":{i:0.00336852893061026,u:"../developing_with_spryker/industry_partner_integration/braintree/integration_payment_braintree_configuration.html",a:"\n    Add spryker-eco/braintree to your project by running composer require spryker-eco/braintree \n    Please refer to config/config.dist.php for example of module configuration.\n To setup the initial Braintree configuration, use the credentials you received after registering your Braintree merchant ...",t:"Braintree — Configuration"},"345":{i:0.00336852893061026,u:"../developing_with_spryker/industry_partner_integration/braintree/integration_payment_braintree_requests.html",a:"In order to perform the needed requests, you can easily use the implemented state machine commands and conditions. The next section gives a summary of them. You can also use the facade methods directly which, however, are invoked by the state machine. Braintree State Machine Commands and Conditions ...",t:"Braintree — Performing Requests"},"346":{i:0.00336852893061026,u:"../developing_with_spryker/industry_partner_integration/braintree/integration_payment_braintree_workflow.html",a:"Both credit card and PayPal utilize the same request flow. It basically consists of the following requests: Pre-check: to check the user information in order to make sure that all the needed information is correct before doing the actual pre-authorization. Authorize: to perform a payment risk check ...",t:"Braintree — Workflow"},"347":{i:0.000536157969416174,u:"../developing_with_spryker/industry_partner_integration/integration_payment_afterpay.html",a:"Payment Integration - After Pay Partner Information Copyright and Disclaimer See  Disclaimer .",t:"Payment Integration - After Pay"},"348":{i:0.000536157969416174,u:"../developing_with_spryker/industry_partner_integration/klarna/integration_payment_klarna.html",a:"Payment Integration  - Klarna BETA version\n This module is still in development. For questions and inquiries please contact  academy@spryker.com Partner Information",t:"Payment Integration  - Klarna"},"349":{i:0.000554054645963086,u:"../developing_with_spryker/industry_partner_integration/payolution/integration_payment_payolution.html",a:"BETA version\n This module is still in development. For questions and inquiries please contact  academy@spryker.com Partner Information Payolution provides two methods of payment: Invoice Installment In order to integrate Payolution payments, a Payolution merchant account should be created and ...",t:"Payment Integration — Payolution"},"350":{i:0.000673840241321723,u:"../developing_with_spryker/industry_partner_integration/payolution/integration_payment_payolution_configuration.html",a:"\n            Add spryker-eco/payolution to your project by running composer require spryker-eco/payolution \n            Please refer to config/config.dist.php for example of module configuration.\n         To setup the initial Payolution configuration, use the credentials you received after ...",t:"Payolution — Configuration"},"351":{i:0.00059950640839012,u:"../developing_with_spryker/industry_partner_integration/payolution/integration_payment_payolution_invoice.html",a:"Workflow Scenarios Payments from Payolution to Merchant are not included in the sequence diagrams since they occur on a regular basis (e.g. every week). Standard Case Full Refund Before Payment Partial Refund Before Payment Full Refund After Payment Partial Refund After Payment Integrating ...",t:"Payolution — Invoice Payment"},"352":{i:0.00059950640839012,u:"../developing_with_spryker/industry_partner_integration/payolution/integration_payment_payolution_installment.html",a:"Installment Scenarios Standard Case Full Refund Partial Refund Integrating Payolution Installment Payment The In order to integrate installment payment, two simple steps are needed: setting Payolution installment payment configuration and calling the facade functions. Setting Payolution Installment ...",t:"Payolution — Installment Payment"},"353":{i:0.00110908790796414,u:"../developing_with_spryker/industry_partner_integration/payolution/integration_payment_payolution_requests.html",a:"In order to perform the needed requests, you can easily use the implemented state machine commands and conditions. The next section gives a summary of them. You can also use the facade methods directly which, however, are invoked by the state machine. Payolution State Machine Commands and Conditions ...",t:"Payolution — Performing Requests"},"354":{i:0.000673840241321723,u:"../developing_with_spryker/industry_partner_integration/payolution/integration_payment_payolution_workflow.html",a:"Both invoice and installment utilize the same request flow. It basically consists of the following requests: Calculation (for installment only): to calculate the installment amounts, dues, and durations. Pre-check (optional): to check the user information in order to make sure that all the needed ...",t:"Payolution — Workflow"},"355":{i:0.00358639460903852,u:"../developing_with_spryker/industry_partner_integration/computop/integration_payment_computop.html",a:"  Partner Information \n            We integrate with a wide range of payment methods that can be configured according to your needs and convenience. Payment method flows are configured using state machines.\n         \n            Implementation details:\n         API details OMS details \n            ...",t:"Payment Integration - Computop"},"356":{i:0.00355544580457067,u:"../developing_with_spryker/industry_partner_integration/computop/integration_payment_computop_api_details.html",a:"Computop API  Authorization Call: \n        Authorize money.\n     \n        There is no partial authorization. Please make one API call to make authorization for all items in the order.\n     \n        It is not possible to Authorize a higher amount than in the ORDER.\n     Inquire Call: Status inquiries ...",t:"Computop - API details"},"357":{i:0.00351750292592514,u:"../developing_with_spryker/industry_partner_integration/computop/integration_payment_computop_oms_details.html",a:"The following plugins are used for performing calls to Paygate during OMS operation. Authorize Plugin: \n        Make an Authorize call to Computop.\n     Cancel Plugin: Follow these steps to cancel the item in the order in case all the items or the last possible one got canceled: Inquire a call to ...",t:"Computop - OMS"},"358":{i:0.00355544580457067,u:"../developing_with_spryker/industry_partner_integration/computop/integration_payment_computop_credit_card.html",a:"Example State Machine Front-end Integration \n    To adjust the frontend appearance, provide the following templates in your theme directory:\n \n        src/\u003cproject_name\u003e/Yves/Computop/Theme/\u003ccustom_theme_name\u003e/credit_card.twig\n     State Machine Integration The Computop provides a demo state machine ...",t:"Computop - Credit Card"},"359":{i:0.00150653035771218,u:"../developing_with_spryker/industry_partner_integration/computop/integration_payment_computop_direct_debit.html",a:" Example State Machine Front-end Integration \n    To adjust the frontend appearance, provide the following templates in your theme directory:\n \n        src/\u003cproject_name\u003e/Yves/Computop/Theme/\u003ccustom_theme_name\u003e/direct_debit.twig\n     State Machine Integration The Computop provides a demo state ...",t:"Computop - Direct Debit "},"360":{i:0.00351750292592514,u:"../developing_with_spryker/industry_partner_integration/computop/integration_payment_computop_ideal.html",a:"The iDeal issuer simulation is not working anymore and therefore testing on  sandbox is currently not possible. We have sent a question to Computop about additional API call. Waiting for the answer. Example State Machine: Front-end Integration \n    To adjust the frontend appearance, provide the ...",t:"Computop - iDeal"},"361":{i:0.00351750292592514,u:"../developing_with_spryker/industry_partner_integration/computop/integration_payment_computop_paydirekt.html",a:" Computop - Paydirekt Example State Machine: Front-end Integration \n    To adjust the frontend appearance, provide the following templates in your theme directory:\n \n        src/\u003cproject_name\u003e/Yves/Computop/Theme/\u003ccustom_theme_name\u003e/paydirekt.twig\n     State Machine Integration The Computop provides ...",t:" Computop - Paydirekt"},"362":{i:0.00351750292592514,u:"../developing_with_spryker/industry_partner_integration/computop/integration_payment_computop_paypal.html",a:" Computop - PayPal Example State Machine Front-end Integration \n    To adjust frontend appearance, provide following templates in your theme directory:\n \n        src/\u003cproject_name\u003e/Yves/Computop/Theme/\u003ccustom_theme_name\u003e/paypal.twig\n     State Machine Integration The Computop provides a demo state ...",t:" Computop - PayPal"},"363":{i:0.00351750292592514,u:"../developing_with_spryker/industry_partner_integration/computop/integration_payment_computop_sofort.html",a:" Example State Machine: Front-end Integration \n    To adjust the frontend appearance, provide the following templates in your theme directory:\n \n        src/\u003cproject_name\u003e/Yves/Computop/Theme/\u003ccustom_theme_name\u003e/sofort.twig\n     State Machine Integration The Computop provides a demo state machine ...",t:"Computop - Sofort "},"364":{i:0.00351750292592514,u:"../developing_with_spryker/industry_partner_integration/computop/integration_payment_computop_easy_credit.html",a:" Computop - Easy Credit Example State Machine Front-end Integration \n    To adjust the frontend appearance, provide the following templates in your theme directory:\n \n        src/\u003cproject_name\u003e/Yves/Computop/Theme/\u003ccustom_theme_name\u003e/easy_credit.twig\n     State Machine Integration The Computop ...",t:" Computop - Easy Credit"},"365":{i:0.00354491685377051,u:"../developing_with_spryker/industry_partner_integration/heidelpay/integration_payment_heidelpay.html",a:"Partner Information Integrating Heidelpay To integrate Hidelpay in your project, follow these steps: Install  Heidelpay Integrate  Heidelpay to your project \tConfigure selected payment methods: Paypal ( Paypal Authorize ,  Payal Debit ) Credit Card iDeal Build your own workflow (create a new OMS ...",t:"Payment Integration - Heidelpay"},"366":{i:0.00344603947818446,u:"../developing_with_spryker/industry_partner_integration/heidelpay/v1_0/integration_payment_heidelpay_installation.html",a:"To install Heidelpay, if necessary, add  the Heidelpay repo to your repositories in composer.json: \"repositories\": [\n  ...\n  {\n    \"type\": \"git\",\n    \"url\": \"https://github.com/spryker-eco/Heidelpay.git\"\n  }\n    ], and simply do \u003e composer require spryker-eco/heidelpay   See also: Payment ...",t:"Heidelpay - Installation"},"367":{i:0.00306010128722704,u:"../developing_with_spryker/industry_partner_integration/heidelpay/v1_0/integration_payment_heidelpay_integration.html",a:"Heidelpay - Integration to Your Project\n Configuration You can copy over configs to your config from the Heidelpay\u0027s moduleconfig.dist.php file.\n         \n        The most important configuration items are explained in the table below,\n        make sure to get the required configuration items from ...",t:"Heidelpay - Integration to Your Project\n"},"368":{i:0.000881969482415459,u:"../developing_with_spryker/industry_partner_integration/heidelpay/v1_0/integration_payment_heidelpay_authorize.html",a:"Setup The following configuration should be made after Heidelpay has been  installed  and  integrated . Configuration Example (for testing only): \n$config[HeidelpayConstants::CONFIG_HEIDELPAY_TRANSACTION_CHANNEL_PAYPAL] = \u002731HA07BC8142C5A171749A60D979B6E4\u0027;\n This value should be taked from HEIDELPAY ...",t:"Heidelpay - Paypal Authorize"},"369":{i:0.00386449289632334,u:"../developing_with_spryker/industry_partner_integration/heidelpay/v1_0/integration_payment_heidelpay_credit_card.html",a:"Setup The following configuration should be made after Heidelpay has been  installed  and  integrated . Configuration Example (for testing only): \n$config[HeidelpayConstants::CONFIG_HEIDELPAY_TRANSACTION_CHANNEL_IDEAL] = ...",t:"Heidelpay - Credit Card Secure"},"370":{i:0.00344603947818446,u:"../developing_with_spryker/industry_partner_integration/heidelpay/v1_0/integration_payment_heidelpay_paypal_debit.html",a:"Setup The following configuration should be made after Heidelpay has been  installed  and  integrated . Configuration Example (for testing only): \n$config[HeidelpayConstants::CONFIG_HEIDELPAY_TRANSACTION_CHANNEL_PAYPAL] = \u002731HA07BC8142C5A171749A60D979B6E4\u0027;\n This value should be taken from HEIDELPAY ...",t:"Heidelpay - Paypal Debit Workflow"},"371":{i:0.00344603947818446,u:"../developing_with_spryker/industry_partner_integration/heidelpay/v1_0/integration_payment_heidelpay_ideal.html",a:"Setup The following configuration should be made after Heidelpay has been  installed  and  integrated . Configuration Example (for testing only): \n$config[HeidelpayConstants::CONFIG_HEIDELPAY_TRANSACTION_CHANNEL_IDEAL] = \u002731HA07BC8142C5A171744B56E61281E5\u0027;\n This value should be taken from HEIDELPAY. ...",t:"Hedelpay - iDeal"},"372":{i:0.00344603947818446,u:"../developing_with_spryker/industry_partner_integration/heidelpay/v1_0/integration_payment_heidelpay_sofortuberweisung.html",a:"Setup The following configuration should be made after Heidelpay has been  installed  and  integrated . Configuration Example (for testing only): \n$config[HeidelpayConstants::CONFIG_HEIDELPAY_TRANSACTION_CHANNEL_SOFORT] = \u002731HA07BC8142C5A171749CDAA43365D2\u0027;\n \n    Checkout Payment Step Display ...",t:"Heidelay - Sofort (Online Transfer)"},"373":{i:0.00305503749885858,u:"../developing_with_spryker/industry_partner_integration/heidelpay/v1_0/integration_payment_heidelpay_error_workflow.html",a:"Heidelpay - Workflow for Errors\n     \n        From the user\u0027s perspective, there is almost no difference between successful and unsuccessful order flow. The only exception is a redirect to the URL after the placeOrderAction (/checkout/place-order) is complete.\n        Both urls can be configured as ...",t:"Heidelpay - Workflow for Errors\n    "},"374":{i:0.000554054645963086,u:"../developing_with_spryker/industry_partner_integration/hosting_continum.html",a:"Hosting Provider - Continum Partner Information Copyright and Disclaimer See  Disclaimer .",t:"Hosting Provider - Continum"},"375":{i:0.000536157969416174,u:"../developing_with_spryker/industry_partner_integration/hosting_claranet.html",a:"Hosting Provider - Claranet Partner Information Copyright and Disclaimer See  Disclaimer .",t:"Hosting Provider - Claranet"},"376":{i:0.000536157969416174,u:"../developing_with_spryker/industry_partner_integration/hosting_root360.html",a:"Hosting Provider - Root 360 Partner Information Copyright and Disclaimer See  Disclaimer .",t:"Hosting Provider - Root 360"},"377":{i:0.000952130195682268,u:"../developing_with_spryker/industry_partner_integration/integration_loggly_queue.html",a:"The Loggly module provides a plugin to read log messages from a queue and send the messages via https to  Loggly . To integrate this plugin you need to have the QueueHandler enabled in your Logger configuration as described  here . In addition you need to properly configure the queue setup for ...",t:"Queue Integration - Loggly"},"378":{i:0.000505316926800741,u:"../developing_with_spryker/development_concepts/development_concepts.html",a:"Spryker is a complex application. We have established certain concepts and implementation abstractions that help us to structure and optimise our application. Before getting your hands dirty and starting to work with Spryker, you should understand our concepts behind certain topics. For example you ...",t:"Development Concepts"},"379":{i:0.000505316926800741,u:"../developing_with_spryker/development_concepts/search_design/search_design_paterns.html",a:" Search Design Patterns for E-Commerce: Schema Structure, Data Driven Ranking \u0026 More Source:  http://project-a.github.io/on-site-search-design-patterns-for-e-commerce/ By  Dr. Martin Loetzsch  ( Project A ) and Krešimir Slugan ( Contorion ) Providing users with a proper on-site search user ...",t:"On-Site Search "},"380":{i:0.000505316926800741,u:"../developing_with_spryker/development_concepts/search_design/data_driven_ranking.html",a:"When a query returns hundreds or thousands of results, it is absolutely crucial that the products at the top of the search result page are the ones that are most relevant to the user. Getting this right will lead to a higher conversion probability and increase customer happiness. Implementing proper ...",t:"Data-Driven Ranking"},"381":{i:0.000505316926800741,u:"../developing_with_spryker/development_concepts/search_design/full_text_search.html",a:"Full-text search is a feature where a user enters arbitrary text into a search field and then gets documents that are relevant for that query. It is normally combined with faceted navigation. In the example below, a user searched for “hammer” and then further filtered for hammer weights of 2000 gram ...",t:"Full-Text Search"},"382":{i:0.000505316926800741,u:"../developing_with_spryker/development_concepts/search_design/generic_faceted_search.html",a:"Faceted search (sometimes also called faceted navigation) allows users to navigate through a web site by applying filters for categories, attributes, price ranges and so on. It’s probably the most basic feature of a search and users expect this to work. Unfortunately, we observed that this is also ...",t:"Generic Faceted Search"},"383":{i:0.000505316926800741,u:"../developing_with_spryker/development_concepts/search_design/multi_term_auto_completion.html",a:"Term completion is a feature where a user gets suggestions for search terms and matching search results as he types the query. We call a completion multi-term when it is able to combine terms from different attributes in an open-ended fashion. In the below example, a user entered “fortis” (a brand) ...",t:"Multi-Term Auto Completion"},"384":{i:0.000505316926800741,u:"../developing_with_spryker/development_concepts/search_design/naive_product_centric_approach.html",a:"A Naive Product Centric Approach Finding products on e-commerce website can be tricky, even when you know exactly what you are looking for. Throughout this document, we will assume a customer wants to buy a hammer that weighs 2kg. A product that would meet his needs might be this “Fäustel” by ...",t:"A Naive Product-Centric Approach"},"385":{i:0.000505316926800741,u:"../developing_with_spryker/development_concepts/search_design/other_best_practices.html",a:"Finally, we want to provide you with a list of some additional and potentially useful principles regarding the setup of an on-site search experience.\n \nIndex Pages, Not Products\n\n Each document we put in Elasticsearch corresponds to an URL  The mapping type in our schema is called page, not product ...",t:"Other Best Practices"},"386":{i:0.000505316926800741,u:"../developing_with_spryker/development_concepts/search_design/personalization_dymanic_pricing.html",a:"Especially in businesses with a B2B focus, customers expect to get discounts after they have been using the service/website for a longer period of time. The search infrastructure should be able to handle such use cases and customers should be able to see their own discounted prices while browsing ...",t:"Personalization: Dynamic Pricing"},"387":{i:0.000505316926800741,u:"../developing_with_spryker/development_concepts/search_design/simple_spelling_suggestions.html",a:"Spelling suggestions provide the users with alternative search terms when the search query does not return any results:\n Translation: Unfortunately there were 0 results for your exact search term “hammer holk”. Did you possibly mean hammer holz? This is one of the simplest features you can build ...",t:"Simple Spelling Suggestions"},"388":{i:0.000505316926800741,u:"../developing_with_spryker/development_concepts/search_design/usage_driven_schema_structure.html",a:"Both the schema and the query generator should not need to know that there is such a thing as as the weight of a hammer. We will argue for a document structure and schema design that is not built around the original data but around the usage of attributes in search operations.\n\n At Contorion, this ...",t:"Usage-Driven Schema \u0026 Document Structure"},"389":{i:0.000999281800624066,u:"../developing_with_spryker/development_concepts/state_machine_cookbook/state_machine_cookbook.html",a:"State machines are a model of computation used to automate processes. In Spryker you can use the OMS module to automate the management of orders or the StateMachine module to automate other processes you define in your shop. Both behave similar, but the OMS one is a customized solution to manage the ...",t:"State Machine Cookbook - Part I - State Machine Fundamentals"},"390":{i:0.00197203669633446,u:"../developing_with_spryker/development_concepts/state_machine_cookbook/state_machine_cookbook_2.html",a:"\nThis chapter will help you model a state machine using Spryker to manage your sale orders.\n First of all, it’s important to know which tasks must be executed after an order is submitted and in which order. Keep in mind that you can define more than one state machine in your system to cover the use ...",t:"State Machine Cookbook - Part 2 -Building a State Machine"},"391":{i:0.000523213603347652,u:"../developing_with_spryker/guidelines/developer_guidelines.html",a:"The developer Guidelines section is a collection of best practices and guidelines for developers.    Academy Navigation To navigate through content, click on an option from the right-hand table of contents or use the search (above).  You can also use navigation buttons on the top right corner of ...",t:"Developer Guidelines"},"392":{i:0.000505316926800741,u:"../developing_with_spryker/guidelines/code_architecture_guide.html",a:"We use our  Architecture Sniffer Tool  to assert a certain quality of Spryker architecture for both core and project.\n Running the Tool The sniffer can find a lot of violations and will report them: $ vendor/bin/console code:sniff:architecture\n\n// Sniff a specific subfolder of your project - with ...",t:"Code Architecture Guide"},"393":{i:0.000537174283771428,u:"../developing_with_spryker/guidelines/coding_best_practices.html",a:"\n            In this article we outline a few common PHP coding problems and the recommended solutions.\n         Merging Arrays \n            When merging arrays, one usually uses array_merge($defaults, $options).\n            However, when working with associative arrays (keys are all string ...",t:"Coding Best Practices"},"394":{i:0.000505316926800741,u:"../developing_with_spryker/guidelines/code_style_guide.html",a:"We follow the  PSR-2 standards . To achieve a styled codebase, we integrated the well known  PHP-CS Fixer  and  PHPCodeSniffer .\n Code Sniffer and Fixer \nWe use a very powerful tool to help keeping the code clean and preventing simple mistakes. Automate Code Style Correction The sniffer can find all ...",t:"Code Style Guide"},"395":{i:0.000934837163926615,u:"../developing_with_spryker/guidelines/secure_coding_practices.html",a:"Unsafe coding practices can make the software application vulnerable to theft of sensitive data.\n\nIn this article, we’ll present a series of coding practices that we recommend using when developing an e-commerce application using Spryker Commerce OS, that will keep your software solution secured.\n\n ...",t:"Secure Coding Practices"},"396":{i:0.000542483843266543,u:"../developing_with_spryker/guidelines/testing_concepts.html",a:"Testing your project is one of the best ways to ensure that your software functions as it is supposed to. The role of testing is to find bugs during the early stages of development to minimize risks. QA is the process of assuring quality, not just verifying you will not get an error on some page. ...",t:"Testing Concepts"},"397":{i:0.000523213603347652,u:"../developing_with_spryker/resources_and_developer_tools/about_resources.html",a:"This section contains general information and resources for developers. The topics covered in resources are general topics that do not pertain to a specific component or capability.   Academy Navigation To navigate through content, click on an option from the right-hand table of contents or use the ...",t:"About Resources"},"398":{i:0.000727214097244346,u:"../developing_with_spryker/resources_and_developer_tools/code_generator.html",a:"The CodeGenerator module can generate your project code.  Out of the box it provides generators for Yves, Zed, Client, Service and Shared application layers.\n\n This is a pre-release.\n Installation\n Install it as\n\n composer require --dev spryker/code-generator You need to run vendor/bin/console ...",t:"Code Generator"},"399":{i:0.0012301164191194,u:"../developing_with_spryker/resources_and_developer_tools/configuration_management.html",a:"Default and Local Configuration Files\n Under config/Shared you’ll find several files that are used for the system’s configuration, that can be used by both Yves and Zed.\n The files are merged in a fixed order if they exist. So the entries of config_default.php are overwritten by the entries in ...",t:"Configuration Management"},"400":{i:0.00440161250930075,u:"../developing_with_spryker/resources_and_developer_tools/console_commands.html",a:"We provide an integrated mechanism to add command line calls. Technically this is based on Symfony’s Console Component.\n\t\t \n\t\t\tGet a list of all available commands\n\t\t You can see the list of all of the commands by running: vendor/bin/console. vagrant@spryker-vagrant ➜  current git:(develop) ✗ ...",t:"Console Commands"},"401":{i:0.000505316926800741,u:"../developing_with_spryker/resources_and_developer_tools/container_globals.html",a:"The ContainerGlobals is a way to inject dependencies which are available inside your  Factories . Every dependency added to the ContainerGlobals is available by using getProvidedDependency() in your factory.\n \nTo add something globally you need to create a service provider and add it to the ...",t:"Container Globals"},"402":{i:0.000505316926800741,u:"../developing_with_spryker/resources_and_developer_tools/core_extension.html",a:"We offer several ways like plugins to hook into the core’s behavior and extend this without modifications. But sometimes this is not enough, so you need to replace a method which is deep in the core.\n\n Before your proceed, double check if there is no other way to solve your requirement, maybe there ...",t:"Core Extension"},"403":{i:0.00176690273612771,u:"../developing_with_spryker/resources_and_developer_tools/cronjob_scheduling.html",a:"We use  Jenkins  for cronjob scheduling. Compared to Crontab, there are several benefits: Jobs are queued and can be manually executed Job definitions are under version control and can be changed by any developer Console output available for debugging Add a new job and run it Jobs are defined in ...",t:"Cronjob Scheduling"},"404":{i:0.000505316926800741,u:"../developing_with_spryker/resources_and_developer_tools/dependency_injector.html",a:"The  Dependency Provider  defines which “external dependencies” you need to retrieve(e.g. a facade of another module).\n \nThe DependencyInjector is the opposite of it. This class will push dependencies into another module without the need to touch the module where it injects to ( OCP ).\n\n For ...",t:"Dependency Injector"},"405":{i:0.0011306348763569,u:"../developing_with_spryker/resources_and_developer_tools/dependency_provider.html",a:"Each modules ships with a DependencyProvider class which explicitly defines services and external dependencies to other modules. For instance when the Cms module requires the Glossary module this needs to be configured here. The DependencyProvider defines dependencies for each layer. Usually you ...",t:"Dependency Provider"},"406":{i:0.00336595668641386,u:"../developing_with_spryker/resources_and_developer_tools/factory.html",a:"All modules are shipped with a dedicated factory for each layer. The responsibility of the factory is to create new instances of the classes from the same layer and module.\n\n The following example shows a typical method from a factory. The method createKeyBuilder() creates an instance which is then ...",t:"Factory"},});