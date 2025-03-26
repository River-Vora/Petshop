/**
 * Copyright 2025 River Vora
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

function Common() {
    let self = this;
    /* Properties */
    this.promoBar =
    {
        promoItems: null,
        currentItem: 0,
        numberOfItems: 0,
    };
    /* Methods */
    this.initialisePromo = function () {
        /* Get all items in promo bar */
        let promoItems = $("#promo > div");
        /* Set values */
        this.promoBar.promoItems = promoItems;
        this.promoBar.numberOfItems = promoItems.length;
        /* Initiate promo loop to show next item */
        this.startDelay();
    }
    this.startDelay = function () {
        /* Wait 4 seconds then show the next message */
        setTimeout(function () {
            self.showNextPromoItem()
        }, 1000);
    }
    this.showNextPromoItem = function () {
        /* Fade out the current item */
        $(self.promoBar.promoItems).fadeOut("slow").promise().done(function () {
            /* Increment current promo item counter */
            if (self.promoBar.currentItem >= (self.promoBar.numberOfItems - 1)) {
                /* Reset counter to zero */
                self.promoBar.currentItem = 0;
            } else {
                /* Increase counter by 1 */
                self.promoBar.currentItem++;
            }
            /* Fade in the next item */
            $(self.promoBar.promoItems).eq(self.promoBar.currentItem).fadeIn("slow", function () {
                /* Delay before showing next item */
                self.startDelay();
            });
        });
    }
}
$(document).ready(function () {
    /* Instantiate new Common class */
    app.common = new Common();
    /* Initialize the Promo bar */
    app.common.initialisePromo();
});