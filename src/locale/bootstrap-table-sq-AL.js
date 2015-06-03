/**
 * Bootstrap Table Albanian translation
 * Author: Xhevat Yiberi<xhevat.ziberi@gmail.com>
 */
(function ($) {
    'use strict';

    $.fn.bootstrapTable.locales['sq-AL'] = {
        formatLoadingMessage: function () {
            return 'Ngarkohet, ju lutem prisni ...';
        },
        formatRecordsPerPage: function (pageNumber) {
            return pageNumber + ' të dhënat për faqe';
        },
        formatShowingRows: function (pageFrom, pageTo, totalRows) {
            return 'Tregohen ' + pageFrom + ' deri ' + pageTo + ' nga ' + totalRows + ' rreshta';
        },
        formatSearch: function () {
            return 'Kërko';
        },
        formatNoMatches: function () {
            return 'Nuk ka të dhëna që përputhen';
        },
        formatPaginationSwitch: function () {
            return 'Fshih/Shfaq numrin e faqeve';
        },
        formatRefresh: function () {
            return 'Fresko';
        },
        formatToggle: function () {
            return 'Ndrysho pamjen';
        },
        formatColumns: function () {
            return 'Kolona';
        },
        formatAllRows: function () {
            return 'Të gjitha';
        }
    };

    $.extend($.fn.bootstrapTable.defaults, $.fn.bootstrapTable.locales['sq-AL']);

})(jQuery);
