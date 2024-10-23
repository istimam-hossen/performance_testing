/*
   Licensed to the Apache Software Foundation (ASF) under one or more
   contributor license agreements.  See the NOTICE file distributed with
   this work for additional information regarding copyright ownership.
   The ASF licenses this file to You under the Apache License, Version 2.0
   (the "License"); you may not use this file except in compliance with
   the License.  You may obtain a copy of the License at

       http://www.apache.org/licenses/LICENSE-2.0

   Unless required by applicable law or agreed to in writing, software
   distributed under the License is distributed on an "AS IS" BASIS,
   WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   See the License for the specific language governing permissions and
   limitations under the License.
*/
$(document).ready(function() {

    $(".click-title").mouseenter( function(    e){
        e.preventDefault();
        this.style.cursor="pointer";
    });
    $(".click-title").mousedown( function(event){
        event.preventDefault();
    });

    // Ugly code while this script is shared among several pages
    try{
        refreshHitsPerSecond(true);
    } catch(e){}
    try{
        refreshResponseTimeOverTime(true);
    } catch(e){}
    try{
        refreshResponseTimePercentiles();
    } catch(e){}
});


var responseTimePercentilesInfos = {
        data: {"result": {"minY": 118.0, "minX": 0.0, "maxY": 2695.0, "series": [{"data": [[0.0, 118.0], [0.1, 118.0], [0.2, 118.0], [0.3, 119.0], [0.4, 122.0], [0.5, 124.0], [0.6, 124.0], [0.7, 124.0], [0.8, 128.0], [0.9, 130.0], [1.0, 130.0], [1.1, 130.0], [1.2, 133.0], [1.3, 133.0], [1.4, 134.0], [1.5, 134.0], [1.6, 134.0], [1.7, 134.0], [1.8, 136.0], [1.9, 138.0], [2.0, 139.0], [2.1, 139.0], [2.2, 140.0], [2.3, 140.0], [2.4, 141.0], [2.5, 141.0], [2.6, 141.0], [2.7, 141.0], [2.8, 141.0], [2.9, 142.0], [3.0, 142.0], [3.1, 142.0], [3.2, 142.0], [3.3, 143.0], [3.4, 143.0], [3.5, 143.0], [3.6, 143.0], [3.7, 144.0], [3.8, 145.0], [3.9, 145.0], [4.0, 147.0], [4.1, 147.0], [4.2, 147.0], [4.3, 148.0], [4.4, 149.0], [4.5, 149.0], [4.6, 149.0], [4.7, 149.0], [4.8, 150.0], [4.9, 150.0], [5.0, 150.0], [5.1, 150.0], [5.2, 150.0], [5.3, 151.0], [5.4, 151.0], [5.5, 151.0], [5.6, 151.0], [5.7, 151.0], [5.8, 151.0], [5.9, 151.0], [6.0, 152.0], [6.1, 152.0], [6.2, 152.0], [6.3, 153.0], [6.4, 153.0], [6.5, 154.0], [6.6, 154.0], [6.7, 154.0], [6.8, 154.0], [6.9, 155.0], [7.0, 155.0], [7.1, 155.0], [7.2, 156.0], [7.3, 156.0], [7.4, 156.0], [7.5, 156.0], [7.6, 156.0], [7.7, 156.0], [7.8, 156.0], [7.9, 157.0], [8.0, 157.0], [8.1, 157.0], [8.2, 157.0], [8.3, 157.0], [8.4, 158.0], [8.5, 158.0], [8.6, 158.0], [8.7, 158.0], [8.8, 159.0], [8.9, 159.0], [9.0, 159.0], [9.1, 159.0], [9.2, 159.0], [9.3, 159.0], [9.4, 159.0], [9.5, 161.0], [9.6, 161.0], [9.7, 161.0], [9.8, 161.0], [9.9, 161.0], [10.0, 161.0], [10.1, 161.0], [10.2, 161.0], [10.3, 162.0], [10.4, 162.0], [10.5, 163.0], [10.6, 163.0], [10.7, 163.0], [10.8, 163.0], [10.9, 163.0], [11.0, 163.0], [11.1, 163.0], [11.2, 163.0], [11.3, 163.0], [11.4, 163.0], [11.5, 164.0], [11.6, 164.0], [11.7, 164.0], [11.8, 164.0], [11.9, 164.0], [12.0, 164.0], [12.1, 164.0], [12.2, 164.0], [12.3, 165.0], [12.4, 165.0], [12.5, 165.0], [12.6, 165.0], [12.7, 166.0], [12.8, 166.0], [12.9, 166.0], [13.0, 166.0], [13.1, 166.0], [13.2, 167.0], [13.3, 167.0], [13.4, 167.0], [13.5, 167.0], [13.6, 167.0], [13.7, 168.0], [13.8, 168.0], [13.9, 168.0], [14.0, 168.0], [14.1, 168.0], [14.2, 168.0], [14.3, 169.0], [14.4, 169.0], [14.5, 169.0], [14.6, 169.0], [14.7, 169.0], [14.8, 169.0], [14.9, 169.0], [15.0, 169.0], [15.1, 169.0], [15.2, 169.0], [15.3, 169.0], [15.4, 169.0], [15.5, 169.0], [15.6, 169.0], [15.7, 169.0], [15.8, 170.0], [15.9, 171.0], [16.0, 171.0], [16.1, 171.0], [16.2, 171.0], [16.3, 172.0], [16.4, 173.0], [16.5, 173.0], [16.6, 173.0], [16.7, 173.0], [16.8, 174.0], [16.9, 174.0], [17.0, 174.0], [17.1, 174.0], [17.2, 174.0], [17.3, 174.0], [17.4, 174.0], [17.5, 174.0], [17.6, 174.0], [17.7, 175.0], [17.8, 175.0], [17.9, 175.0], [18.0, 175.0], [18.1, 175.0], [18.2, 176.0], [18.3, 176.0], [18.4, 176.0], [18.5, 177.0], [18.6, 177.0], [18.7, 177.0], [18.8, 177.0], [18.9, 177.0], [19.0, 177.0], [19.1, 177.0], [19.2, 177.0], [19.3, 178.0], [19.4, 178.0], [19.5, 179.0], [19.6, 179.0], [19.7, 179.0], [19.8, 179.0], [19.9, 179.0], [20.0, 180.0], [20.1, 180.0], [20.2, 180.0], [20.3, 180.0], [20.4, 180.0], [20.5, 180.0], [20.6, 180.0], [20.7, 180.0], [20.8, 180.0], [20.9, 180.0], [21.0, 181.0], [21.1, 181.0], [21.2, 181.0], [21.3, 181.0], [21.4, 181.0], [21.5, 182.0], [21.6, 182.0], [21.7, 182.0], [21.8, 182.0], [21.9, 182.0], [22.0, 182.0], [22.1, 182.0], [22.2, 182.0], [22.3, 183.0], [22.4, 183.0], [22.5, 183.0], [22.6, 183.0], [22.7, 184.0], [22.8, 184.0], [22.9, 184.0], [23.0, 185.0], [23.1, 185.0], [23.2, 185.0], [23.3, 185.0], [23.4, 185.0], [23.5, 186.0], [23.6, 186.0], [23.7, 186.0], [23.8, 186.0], [23.9, 187.0], [24.0, 187.0], [24.1, 187.0], [24.2, 187.0], [24.3, 188.0], [24.4, 188.0], [24.5, 188.0], [24.6, 188.0], [24.7, 188.0], [24.8, 189.0], [24.9, 189.0], [25.0, 189.0], [25.1, 189.0], [25.2, 189.0], [25.3, 189.0], [25.4, 189.0], [25.5, 189.0], [25.6, 189.0], [25.7, 190.0], [25.8, 190.0], [25.9, 190.0], [26.0, 190.0], [26.1, 190.0], [26.2, 190.0], [26.3, 190.0], [26.4, 191.0], [26.5, 191.0], [26.6, 191.0], [26.7, 192.0], [26.8, 192.0], [26.9, 192.0], [27.0, 192.0], [27.1, 192.0], [27.2, 192.0], [27.3, 192.0], [27.4, 192.0], [27.5, 192.0], [27.6, 192.0], [27.7, 192.0], [27.8, 193.0], [27.9, 193.0], [28.0, 193.0], [28.1, 193.0], [28.2, 193.0], [28.3, 193.0], [28.4, 193.0], [28.5, 194.0], [28.6, 194.0], [28.7, 194.0], [28.8, 194.0], [28.9, 194.0], [29.0, 194.0], [29.1, 194.0], [29.2, 194.0], [29.3, 194.0], [29.4, 195.0], [29.5, 195.0], [29.6, 195.0], [29.7, 195.0], [29.8, 196.0], [29.9, 196.0], [30.0, 197.0], [30.1, 197.0], [30.2, 198.0], [30.3, 198.0], [30.4, 198.0], [30.5, 198.0], [30.6, 198.0], [30.7, 199.0], [30.8, 199.0], [30.9, 199.0], [31.0, 199.0], [31.1, 199.0], [31.2, 199.0], [31.3, 199.0], [31.4, 200.0], [31.5, 202.0], [31.6, 202.0], [31.7, 202.0], [31.8, 202.0], [31.9, 202.0], [32.0, 202.0], [32.1, 202.0], [32.2, 203.0], [32.3, 203.0], [32.4, 203.0], [32.5, 203.0], [32.6, 203.0], [32.7, 204.0], [32.8, 204.0], [32.9, 204.0], [33.0, 205.0], [33.1, 205.0], [33.2, 205.0], [33.3, 205.0], [33.4, 205.0], [33.5, 205.0], [33.6, 205.0], [33.7, 205.0], [33.8, 205.0], [33.9, 206.0], [34.0, 206.0], [34.1, 206.0], [34.2, 207.0], [34.3, 207.0], [34.4, 207.0], [34.5, 208.0], [34.6, 208.0], [34.7, 208.0], [34.8, 208.0], [34.9, 210.0], [35.0, 210.0], [35.1, 210.0], [35.2, 211.0], [35.3, 211.0], [35.4, 211.0], [35.5, 211.0], [35.6, 211.0], [35.7, 212.0], [35.8, 212.0], [35.9, 212.0], [36.0, 212.0], [36.1, 212.0], [36.2, 213.0], [36.3, 213.0], [36.4, 214.0], [36.5, 214.0], [36.6, 214.0], [36.7, 214.0], [36.8, 214.0], [36.9, 215.0], [37.0, 215.0], [37.1, 215.0], [37.2, 216.0], [37.3, 216.0], [37.4, 217.0], [37.5, 217.0], [37.6, 217.0], [37.7, 217.0], [37.8, 217.0], [37.9, 218.0], [38.0, 218.0], [38.1, 218.0], [38.2, 218.0], [38.3, 218.0], [38.4, 219.0], [38.5, 219.0], [38.6, 219.0], [38.7, 220.0], [38.8, 221.0], [38.9, 221.0], [39.0, 222.0], [39.1, 222.0], [39.2, 223.0], [39.3, 224.0], [39.4, 224.0], [39.5, 224.0], [39.6, 224.0], [39.7, 225.0], [39.8, 225.0], [39.9, 226.0], [40.0, 226.0], [40.1, 226.0], [40.2, 226.0], [40.3, 228.0], [40.4, 229.0], [40.5, 229.0], [40.6, 229.0], [40.7, 230.0], [40.8, 230.0], [40.9, 230.0], [41.0, 230.0], [41.1, 230.0], [41.2, 230.0], [41.3, 231.0], [41.4, 231.0], [41.5, 233.0], [41.6, 233.0], [41.7, 234.0], [41.8, 234.0], [41.9, 235.0], [42.0, 236.0], [42.1, 236.0], [42.2, 237.0], [42.3, 237.0], [42.4, 240.0], [42.5, 241.0], [42.6, 241.0], [42.7, 241.0], [42.8, 242.0], [42.9, 243.0], [43.0, 243.0], [43.1, 243.0], [43.2, 243.0], [43.3, 244.0], [43.4, 244.0], [43.5, 245.0], [43.6, 245.0], [43.7, 246.0], [43.8, 247.0], [43.9, 247.0], [44.0, 248.0], [44.1, 248.0], [44.2, 248.0], [44.3, 249.0], [44.4, 249.0], [44.5, 250.0], [44.6, 250.0], [44.7, 251.0], [44.8, 252.0], [44.9, 252.0], [45.0, 253.0], [45.1, 253.0], [45.2, 255.0], [45.3, 255.0], [45.4, 255.0], [45.5, 256.0], [45.6, 256.0], [45.7, 256.0], [45.8, 256.0], [45.9, 256.0], [46.0, 256.0], [46.1, 256.0], [46.2, 257.0], [46.3, 257.0], [46.4, 258.0], [46.5, 258.0], [46.6, 258.0], [46.7, 259.0], [46.8, 259.0], [46.9, 260.0], [47.0, 261.0], [47.1, 261.0], [47.2, 261.0], [47.3, 262.0], [47.4, 263.0], [47.5, 263.0], [47.6, 263.0], [47.7, 264.0], [47.8, 265.0], [47.9, 266.0], [48.0, 266.0], [48.1, 266.0], [48.2, 266.0], [48.3, 267.0], [48.4, 267.0], [48.5, 267.0], [48.6, 267.0], [48.7, 268.0], [48.8, 270.0], [48.9, 270.0], [49.0, 271.0], [49.1, 271.0], [49.2, 272.0], [49.3, 273.0], [49.4, 273.0], [49.5, 273.0], [49.6, 273.0], [49.7, 275.0], [49.8, 277.0], [49.9, 278.0], [50.0, 279.0], [50.1, 279.0], [50.2, 279.0], [50.3, 280.0], [50.4, 281.0], [50.5, 281.0], [50.6, 281.0], [50.7, 281.0], [50.8, 283.0], [50.9, 283.0], [51.0, 286.0], [51.1, 286.0], [51.2, 286.0], [51.3, 286.0], [51.4, 287.0], [51.5, 288.0], [51.6, 288.0], [51.7, 289.0], [51.8, 289.0], [51.9, 289.0], [52.0, 289.0], [52.1, 289.0], [52.2, 290.0], [52.3, 291.0], [52.4, 291.0], [52.5, 291.0], [52.6, 291.0], [52.7, 291.0], [52.8, 291.0], [52.9, 292.0], [53.0, 292.0], [53.1, 292.0], [53.2, 293.0], [53.3, 293.0], [53.4, 294.0], [53.5, 294.0], [53.6, 294.0], [53.7, 294.0], [53.8, 295.0], [53.9, 296.0], [54.0, 296.0], [54.1, 296.0], [54.2, 297.0], [54.3, 297.0], [54.4, 299.0], [54.5, 301.0], [54.6, 301.0], [54.7, 302.0], [54.8, 302.0], [54.9, 303.0], [55.0, 303.0], [55.1, 303.0], [55.2, 303.0], [55.3, 303.0], [55.4, 304.0], [55.5, 306.0], [55.6, 306.0], [55.7, 306.0], [55.8, 306.0], [55.9, 307.0], [56.0, 307.0], [56.1, 307.0], [56.2, 308.0], [56.3, 309.0], [56.4, 312.0], [56.5, 312.0], [56.6, 312.0], [56.7, 312.0], [56.8, 313.0], [56.9, 315.0], [57.0, 316.0], [57.1, 316.0], [57.2, 317.0], [57.3, 317.0], [57.4, 318.0], [57.5, 318.0], [57.6, 318.0], [57.7, 318.0], [57.8, 319.0], [57.9, 320.0], [58.0, 320.0], [58.1, 320.0], [58.2, 321.0], [58.3, 322.0], [58.4, 322.0], [58.5, 324.0], [58.6, 324.0], [58.7, 326.0], [58.8, 326.0], [58.9, 327.0], [59.0, 330.0], [59.1, 330.0], [59.2, 331.0], [59.3, 331.0], [59.4, 332.0], [59.5, 333.0], [59.6, 333.0], [59.7, 333.0], [59.8, 334.0], [59.9, 334.0], [60.0, 334.0], [60.1, 334.0], [60.2, 336.0], [60.3, 337.0], [60.4, 337.0], [60.5, 338.0], [60.6, 338.0], [60.7, 339.0], [60.8, 339.0], [60.9, 340.0], [61.0, 340.0], [61.1, 340.0], [61.2, 342.0], [61.3, 343.0], [61.4, 344.0], [61.5, 348.0], [61.6, 348.0], [61.7, 350.0], [61.8, 351.0], [61.9, 351.0], [62.0, 352.0], [62.1, 352.0], [62.2, 354.0], [62.3, 357.0], [62.4, 358.0], [62.5, 358.0], [62.6, 358.0], [62.7, 359.0], [62.8, 362.0], [62.9, 362.0], [63.0, 362.0], [63.1, 362.0], [63.2, 363.0], [63.3, 365.0], [63.4, 365.0], [63.5, 367.0], [63.6, 367.0], [63.7, 367.0], [63.8, 369.0], [63.9, 373.0], [64.0, 375.0], [64.1, 375.0], [64.2, 375.0], [64.3, 376.0], [64.4, 377.0], [64.5, 378.0], [64.6, 378.0], [64.7, 380.0], [64.8, 384.0], [64.9, 385.0], [65.0, 388.0], [65.1, 388.0], [65.2, 388.0], [65.3, 389.0], [65.4, 392.0], [65.5, 394.0], [65.6, 394.0], [65.7, 396.0], [65.8, 398.0], [65.9, 399.0], [66.0, 401.0], [66.1, 401.0], [66.2, 403.0], [66.3, 404.0], [66.4, 407.0], [66.5, 410.0], [66.6, 410.0], [66.7, 410.0], [66.8, 411.0], [66.9, 411.0], [67.0, 412.0], [67.1, 412.0], [67.2, 413.0], [67.3, 413.0], [67.4, 416.0], [67.5, 418.0], [67.6, 418.0], [67.7, 418.0], [67.8, 418.0], [67.9, 419.0], [68.0, 425.0], [68.1, 425.0], [68.2, 427.0], [68.3, 428.0], [68.4, 428.0], [68.5, 429.0], [68.6, 429.0], [68.7, 429.0], [68.8, 430.0], [68.9, 432.0], [69.0, 433.0], [69.1, 433.0], [69.2, 434.0], [69.3, 434.0], [69.4, 435.0], [69.5, 439.0], [69.6, 439.0], [69.7, 439.0], [69.8, 443.0], [69.9, 445.0], [70.0, 446.0], [70.1, 446.0], [70.2, 446.0], [70.3, 446.0], [70.4, 447.0], [70.5, 447.0], [70.6, 447.0], [70.7, 449.0], [70.8, 449.0], [70.9, 450.0], [71.0, 452.0], [71.1, 452.0], [71.2, 457.0], [71.3, 459.0], [71.4, 460.0], [71.5, 460.0], [71.6, 460.0], [71.7, 460.0], [71.8, 461.0], [71.9, 463.0], [72.0, 465.0], [72.1, 465.0], [72.2, 465.0], [72.3, 470.0], [72.4, 470.0], [72.5, 471.0], [72.6, 471.0], [72.7, 474.0], [72.8, 474.0], [72.9, 474.0], [73.0, 476.0], [73.1, 476.0], [73.2, 476.0], [73.3, 481.0], [73.4, 483.0], [73.5, 484.0], [73.6, 484.0], [73.7, 486.0], [73.8, 488.0], [73.9, 491.0], [74.0, 494.0], [74.1, 494.0], [74.2, 496.0], [74.3, 499.0], [74.4, 500.0], [74.5, 500.0], [74.6, 500.0], [74.7, 501.0], [74.8, 505.0], [74.9, 509.0], [75.0, 510.0], [75.1, 510.0], [75.2, 513.0], [75.3, 533.0], [75.4, 538.0], [75.5, 539.0], [75.6, 539.0], [75.7, 547.0], [75.8, 547.0], [75.9, 551.0], [76.0, 554.0], [76.1, 554.0], [76.2, 558.0], [76.3, 561.0], [76.4, 584.0], [76.5, 588.0], [76.6, 588.0], [76.7, 588.0], [76.8, 594.0], [76.9, 611.0], [77.0, 619.0], [77.1, 619.0], [77.2, 625.0], [77.3, 627.0], [77.4, 635.0], [77.5, 636.0], [77.6, 636.0], [77.7, 659.0], [77.8, 665.0], [77.9, 669.0], [78.0, 683.0], [78.1, 683.0], [78.2, 687.0], [78.3, 727.0], [78.4, 729.0], [78.5, 742.0], [78.6, 742.0], [78.7, 764.0], [78.8, 782.0], [78.9, 784.0], [79.0, 797.0], [79.1, 797.0], [79.2, 799.0], [79.3, 801.0], [79.4, 823.0], [79.5, 831.0], [79.6, 831.0], [79.7, 852.0], [79.8, 854.0], [79.9, 856.0], [80.0, 857.0], [80.1, 857.0], [80.2, 864.0], [80.3, 885.0], [80.4, 888.0], [80.5, 896.0], [80.6, 896.0], [80.7, 901.0], [80.8, 901.0], [80.9, 905.0], [81.0, 905.0], [81.1, 905.0], [81.2, 906.0], [81.3, 906.0], [81.4, 907.0], [81.5, 913.0], [81.6, 913.0], [81.7, 913.0], [81.8, 935.0], [81.9, 935.0], [82.0, 939.0], [82.1, 939.0], [82.2, 957.0], [82.3, 957.0], [82.4, 967.0], [82.5, 967.0], [82.6, 967.0], [82.7, 969.0], [82.8, 969.0], [82.9, 970.0], [83.0, 971.0], [83.1, 971.0], [83.2, 971.0], [83.3, 972.0], [83.4, 973.0], [83.5, 974.0], [83.6, 974.0], [83.7, 975.0], [83.8, 976.0], [83.9, 978.0], [84.0, 978.0], [84.1, 978.0], [84.2, 980.0], [84.3, 991.0], [84.4, 997.0], [84.5, 1120.0], [84.6, 1120.0], [84.7, 1190.0], [84.8, 1236.0], [84.9, 1259.0], [85.0, 1294.0], [85.1, 1294.0], [85.2, 1296.0], [85.3, 1298.0], [85.4, 1304.0], [85.5, 1307.0], [85.6, 1307.0], [85.7, 1308.0], [85.8, 1308.0], [85.9, 1311.0], [86.0, 1327.0], [86.1, 1327.0], [86.2, 1328.0], [86.3, 1353.0], [86.4, 1360.0], [86.5, 1365.0], [86.6, 1365.0], [86.7, 1367.0], [86.8, 1373.0], [86.9, 1380.0], [87.0, 1382.0], [87.1, 1382.0], [87.2, 1386.0], [87.3, 1386.0], [87.4, 1387.0], [87.5, 1396.0], [87.6, 1396.0], [87.7, 1399.0], [87.8, 1408.0], [87.9, 1417.0], [88.0, 1418.0], [88.1, 1418.0], [88.2, 1418.0], [88.3, 1420.0], [88.4, 1423.0], [88.5, 1429.0], [88.6, 1429.0], [88.7, 1431.0], [88.8, 1432.0], [88.9, 1434.0], [89.0, 1449.0], [89.1, 1449.0], [89.2, 1459.0], [89.3, 1476.0], [89.4, 1482.0], [89.5, 1485.0], [89.6, 1485.0], [89.7, 1506.0], [89.8, 1520.0], [89.9, 1572.0], [90.0, 1620.0], [90.1, 1620.0], [90.2, 1626.0], [90.3, 1664.0], [90.4, 1671.0], [90.5, 1689.0], [90.6, 1689.0], [90.7, 1698.0], [90.8, 1739.0], [90.9, 1809.0], [91.0, 1824.0], [91.1, 1824.0], [91.2, 1837.0], [91.3, 1853.0], [91.4, 2047.0], [91.5, 2051.0], [91.6, 2051.0], [91.7, 2055.0], [91.8, 2061.0], [91.9, 2142.0], [92.0, 2143.0], [92.1, 2143.0], [92.2, 2147.0], [92.3, 2150.0], [92.4, 2154.0], [92.5, 2157.0], [92.6, 2157.0], [92.7, 2158.0], [92.8, 2165.0], [92.9, 2174.0], [93.0, 2177.0], [93.1, 2177.0], [93.2, 2221.0], [93.3, 2245.0], [93.4, 2246.0], [93.5, 2247.0], [93.6, 2247.0], [93.7, 2247.0], [93.8, 2249.0], [93.9, 2252.0], [94.0, 2253.0], [94.1, 2253.0], [94.2, 2254.0], [94.3, 2256.0], [94.4, 2257.0], [94.5, 2257.0], [94.6, 2257.0], [94.7, 2258.0], [94.8, 2262.0], [94.9, 2262.0], [95.0, 2265.0], [95.1, 2265.0], [95.2, 2272.0], [95.3, 2277.0], [95.4, 2301.0], [95.5, 2306.0], [95.6, 2306.0], [95.7, 2310.0], [95.8, 2338.0], [95.9, 2341.0], [96.0, 2355.0], [96.1, 2355.0], [96.2, 2388.0], [96.3, 2391.0], [96.4, 2402.0], [96.5, 2409.0], [96.6, 2409.0], [96.7, 2417.0], [96.8, 2428.0], [96.9, 2438.0], [97.0, 2440.0], [97.1, 2440.0], [97.2, 2444.0], [97.3, 2450.0], [97.4, 2473.0], [97.5, 2513.0], [97.6, 2513.0], [97.7, 2563.0], [97.8, 2573.0], [97.9, 2590.0], [98.0, 2592.0], [98.1, 2592.0], [98.2, 2632.0], [98.3, 2635.0], [98.4, 2636.0], [98.5, 2647.0], [98.6, 2647.0], [98.7, 2664.0], [98.8, 2667.0], [98.9, 2667.0], [99.0, 2668.0], [99.1, 2668.0], [99.2, 2673.0], [99.3, 2681.0], [99.4, 2681.0], [99.5, 2682.0], [99.6, 2682.0], [99.7, 2689.0], [99.8, 2693.0], [99.9, 2695.0]], "isOverall": false, "label": "reqres api", "isController": false}], "supportsControllersDiscrimination": true, "maxX": 100.0, "title": "Response Time Percentiles"}},
        getOptions: function() {
            return {
                series: {
                    points: { show: false }
                },
                legend: {
                    noColumns: 2,
                    show: true,
                    container: '#legendResponseTimePercentiles'
                },
                xaxis: {
                    tickDecimals: 1,
                    axisLabel: "Percentiles",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Percentile value in ms",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: "%s : %x.2 percentile was %y ms"
                },
                selection: { mode: "xy" },
            };
        },
        createGraph: function() {
            var data = this.data;
            var dataset = prepareData(data.result.series, $("#choicesResponseTimePercentiles"));
            var options = this.getOptions();
            prepareOptions(options, data);
            $.plot($("#flotResponseTimesPercentiles"), dataset, options);
            // setup overview
            $.plot($("#overviewResponseTimesPercentiles"), dataset, prepareOverviewOptions(options));
        }
};

/**
 * @param elementId Id of element where we display message
 */
function setEmptyGraph(elementId) {
    $(function() {
        $(elementId).text("No graph series with filter="+seriesFilter);
    });
}

// Response times percentiles
function refreshResponseTimePercentiles() {
    var infos = responseTimePercentilesInfos;
    prepareSeries(infos.data);
    if(infos.data.result.series.length == 0) {
        setEmptyGraph("#bodyResponseTimePercentiles");
        return;
    }
    if (isGraph($("#flotResponseTimesPercentiles"))){
        infos.createGraph();
    } else {
        var choiceContainer = $("#choicesResponseTimePercentiles");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotResponseTimesPercentiles", "#overviewResponseTimesPercentiles");
        $('#bodyResponseTimePercentiles .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
}

var responseTimeDistributionInfos = {
        data: {"result": {"minY": 1.0, "minX": 100.0, "maxY": 251.0, "series": [{"data": [[2100.0, 10.0], [2200.0, 18.0], [2300.0, 8.0], [2400.0, 9.0], [600.0, 11.0], [2500.0, 5.0], [2600.0, 15.0], [700.0, 8.0], [200.0, 185.0], [800.0, 11.0], [900.0, 31.0], [1100.0, 2.0], [300.0, 92.0], [1200.0, 5.0], [1300.0, 19.0], [1400.0, 15.0], [1500.0, 3.0], [400.0, 67.0], [100.0, 251.0], [1600.0, 6.0], [1700.0, 1.0], [1800.0, 4.0], [2000.0, 4.0], [500.0, 20.0]], "isOverall": false, "label": "reqres api", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 100, "maxX": 2600.0, "title": "Response Time Distribution"}},
        getOptions: function() {
            var granularity = this.data.result.granularity;
            return {
                legend: {
                    noColumns: 2,
                    show: true,
                    container: '#legendResponseTimeDistribution'
                },
                xaxis:{
                    axisLabel: "Response times in ms",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Number of responses",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                bars : {
                    show: true,
                    barWidth: this.data.result.granularity
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: function(label, xval, yval, flotItem){
                        return yval + " responses for " + label + " were between " + xval + " and " + (xval + granularity) + " ms";
                    }
                }
            };
        },
        createGraph: function() {
            var data = this.data;
            var options = this.getOptions();
            prepareOptions(options, data);
            $.plot($("#flotResponseTimeDistribution"), prepareData(data.result.series, $("#choicesResponseTimeDistribution")), options);
        }

};

// Response time distribution
function refreshResponseTimeDistribution() {
    var infos = responseTimeDistributionInfos;
    prepareSeries(infos.data);
    if(infos.data.result.series.length == 0) {
        setEmptyGraph("#bodyResponseTimeDistribution");
        return;
    }
    if (isGraph($("#flotResponseTimeDistribution"))){
        infos.createGraph();
    }else{
        var choiceContainer = $("#choicesResponseTimeDistribution");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        $('#footerResponseTimeDistribution .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};


var syntheticResponseTimeDistributionInfos = {
        data: {"result": {"minY": 83.0, "minX": 0.0, "ticks": [[0, "Requests having \nresponse time <= 500ms"], [1, "Requests having \nresponse time > 500ms and <= 1,500ms"], [2, "Requests having \nresponse time > 1,500ms"], [3, "Requests in error"]], "maxY": 597.0, "series": [{"data": [[0.0, 597.0]], "color": "#9ACD32", "isOverall": false, "label": "Requests having \nresponse time <= 500ms", "isController": false}, {"data": [[1.0, 120.0]], "color": "yellow", "isOverall": false, "label": "Requests having \nresponse time > 500ms and <= 1,500ms", "isController": false}, {"data": [[2.0, 83.0]], "color": "orange", "isOverall": false, "label": "Requests having \nresponse time > 1,500ms", "isController": false}, {"data": [], "color": "#FF6347", "isOverall": false, "label": "Requests in error", "isController": false}], "supportsControllersDiscrimination": false, "maxX": 2.0, "title": "Synthetic Response Times Distribution"}},
        getOptions: function() {
            return {
                legend: {
                    noColumns: 2,
                    show: true,
                    container: '#legendSyntheticResponseTimeDistribution'
                },
                xaxis:{
                    axisLabel: "Response times ranges",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                    tickLength:0,
                    min:-0.5,
                    max:3.5
                },
                yaxis: {
                    axisLabel: "Number of responses",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                bars : {
                    show: true,
                    align: "center",
                    barWidth: 0.25,
                    fill:.75
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: function(label, xval, yval, flotItem){
                        return yval + " " + label;
                    }
                }
            };
        },
        createGraph: function() {
            var data = this.data;
            var options = this.getOptions();
            prepareOptions(options, data);
            options.xaxis.ticks = data.result.ticks;
            $.plot($("#flotSyntheticResponseTimeDistribution"), prepareData(data.result.series, $("#choicesSyntheticResponseTimeDistribution")), options);
        }

};

// Response time distribution
function refreshSyntheticResponseTimeDistribution() {
    var infos = syntheticResponseTimeDistributionInfos;
    prepareSeries(infos.data, true);
    if (isGraph($("#flotSyntheticResponseTimeDistribution"))){
        infos.createGraph();
    }else{
        var choiceContainer = $("#choicesSyntheticResponseTimeDistribution");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        $('#footerSyntheticResponseTimeDistribution .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};

var activeThreadsOverTimeInfos = {
        data: {"result": {"minY": 43.929999999999936, "minX": 1.72880196E12, "maxY": 43.929999999999936, "series": [{"data": [[1.72880196E12, 43.929999999999936]], "isOverall": false, "label": "Thread Group", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.72880196E12, "title": "Active Threads Over Time"}},
        getOptions: function() {
            return {
                series: {
                    stack: true,
                    lines: {
                        show: true,
                        fill: true
                    },
                    points: {
                        show: true
                    }
                },
                xaxis: {
                    mode: "time",
                    timeformat: getTimeFormat(this.data.result.granularity),
                    axisLabel: getElapsedTimeLabel(this.data.result.granularity),
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Number of active threads",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20
                },
                legend: {
                    noColumns: 6,
                    show: true,
                    container: '#legendActiveThreadsOverTime'
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                selection: {
                    mode: 'xy'
                },
                tooltip: true,
                tooltipOpts: {
                    content: "%s : At %x there were %y active threads"
                }
            };
        },
        createGraph: function() {
            var data = this.data;
            var dataset = prepareData(data.result.series, $("#choicesActiveThreadsOverTime"));
            var options = this.getOptions();
            prepareOptions(options, data);
            $.plot($("#flotActiveThreadsOverTime"), dataset, options);
            // setup overview
            $.plot($("#overviewActiveThreadsOverTime"), dataset, prepareOverviewOptions(options));
        }
};

// Active Threads Over Time
function refreshActiveThreadsOverTime(fixTimestamps) {
    var infos = activeThreadsOverTimeInfos;
    prepareSeries(infos.data);
    if(fixTimestamps) {
        fixTimeStamps(infos.data.result.series, 21600000);
    }
    if(isGraph($("#flotActiveThreadsOverTime"))) {
        infos.createGraph();
    }else{
        var choiceContainer = $("#choicesActiveThreadsOverTime");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotActiveThreadsOverTime", "#overviewActiveThreadsOverTime");
        $('#footerActiveThreadsOverTime .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};

var timeVsThreadsInfos = {
        data: {"result": {"minY": 156.0, "minX": 2.0, "maxY": 2612.75, "series": [{"data": [[2.0, 258.5], [3.0, 449.0], [4.0, 267.0], [6.0, 260.0], [7.0, 843.2857142857143], [8.0, 947.0], [9.0, 231.64285714285714], [10.0, 191.23529411764707], [11.0, 159.95652173913044], [12.0, 186.975], [13.0, 190.74418604651166], [14.0, 196.61363636363637], [15.0, 215.4666666666667], [16.0, 218.37500000000003], [17.0, 250.62499999999997], [18.0, 277.11111111111114], [19.0, 261.0666666666666], [20.0, 308.7692307692308], [21.0, 276.09999999999997], [22.0, 280.8571428571429], [23.0, 304.75], [24.0, 302.2222222222222], [25.0, 287.0], [26.0, 442.5], [27.0, 316.4166666666667], [28.0, 295.45454545454544], [29.0, 484.81249999999994], [30.0, 468.9230769230769], [31.0, 312.0], [33.0, 310.6666666666667], [32.0, 356.5], [35.0, 401.5], [34.0, 417.90909090909093], [36.0, 408.74999999999994], [37.0, 337.6], [39.0, 808.3333333333334], [38.0, 352.66666666666663], [41.0, 688.6666666666667], [40.0, 373.33333333333337], [42.0, 352.57142857142856], [43.0, 464.4], [45.0, 868.5], [44.0, 645.8571428571428], [46.0, 1357.0], [47.0, 309.75], [49.0, 1685.5714285714287], [48.0, 416.0], [50.0, 326.0], [53.0, 1768.8], [52.0, 287.0], [54.0, 250.0], [57.0, 1380.75], [56.0, 245.0], [59.0, 690.0], [58.0, 1029.6666666666667], [63.0, 2150.0], [62.0, 2367.6666666666665], [65.0, 2612.75], [71.0, 2154.0], [69.0, 2603.0], [75.0, 1739.0], [73.0, 1190.0], [72.0, 2028.0], [74.0, 796.0344827586206], [78.0, 970.0], [77.0, 913.0], [76.0, 976.0], [82.0, 906.0], [81.0, 925.3333333333334], [85.0, 1322.5], [90.0, 156.0], [89.0, 1298.0], [88.0, 2538.5], [94.0, 1630.6], [93.0, 1307.0], [92.0, 1837.0], [99.0, 1308.0], [96.0, 1814.3333333333333], [98.0, 1556.5], [103.0, 1787.5], [101.0, 1639.4], [100.0, 2461.0], [107.0, 1888.5], [106.0, 1904.3333333333333], [105.0, 978.0], [110.0, 1215.0], [109.0, 195.0], [108.0, 842.25], [114.0, 1082.8571428571427], [113.0, 1317.8333333333333], [115.0, 170.0], [112.0, 400.75], [118.0, 1935.5], [116.0, 1657.6], [119.0, 500.5], [117.0, 967.0], [123.0, 2247.0], [122.0, 2254.0], [121.0, 1963.5], [127.0, 2160.0], [134.0, 1380.0], [131.0, 1382.0], [129.0, 1754.0], [128.0, 1752.0], [130.0, 1386.0], [143.0, 1036.5], [141.0, 1414.5], [138.0, 756.3333333333333], [137.0, 2221.0], [151.0, 474.0], [150.0, 478.5], [149.0, 483.0], [147.0, 499.0], [145.0, 499.0], [159.0, 1308.0], [157.0, 729.0], [156.0, 440.5], [153.0, 484.0], [152.0, 471.0], [165.0, 444.0], [163.0, 2099.0], [162.0, 168.0], [161.0, 427.0]], "isOverall": false, "label": "reqres api", "isController": false}, {"data": [[43.929999999999936, 569.1274999999996]], "isOverall": false, "label": "reqres api-Aggregated", "isController": false}], "supportsControllersDiscrimination": true, "maxX": 165.0, "title": "Time VS Threads"}},
        getOptions: function() {
            return {
                series: {
                    lines: {
                        show: true
                    },
                    points: {
                        show: true
                    }
                },
                xaxis: {
                    axisLabel: "Number of active threads",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Average response times in ms",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20
                },
                legend: { noColumns: 2,show: true, container: '#legendTimeVsThreads' },
                selection: {
                    mode: 'xy'
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to work
                },
                tooltip: true,
                tooltipOpts: {
                    content: "%s: At %x.2 active threads, Average response time was %y.2 ms"
                }
            };
        },
        createGraph: function() {
            var data = this.data;
            var dataset = prepareData(data.result.series, $("#choicesTimeVsThreads"));
            var options = this.getOptions();
            prepareOptions(options, data);
            $.plot($("#flotTimesVsThreads"), dataset, options);
            // setup overview
            $.plot($("#overviewTimesVsThreads"), dataset, prepareOverviewOptions(options));
        }
};

// Time vs threads
function refreshTimeVsThreads(){
    var infos = timeVsThreadsInfos;
    prepareSeries(infos.data);
    if(infos.data.result.series.length == 0) {
        setEmptyGraph("#bodyTimeVsThreads");
        return;
    }
    if(isGraph($("#flotTimesVsThreads"))){
        infos.createGraph();
    }else{
        var choiceContainer = $("#choicesTimeVsThreads");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotTimesVsThreads", "#overviewTimesVsThreads");
        $('#footerTimeVsThreads .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};

var bytesThroughputOverTimeInfos = {
        data : {"result": {"minY": 1640.0, "minX": 1.72880196E12, "maxY": 25826.666666666668, "series": [{"data": [[1.72880196E12, 25826.666666666668]], "isOverall": false, "label": "Bytes received per second", "isController": false}, {"data": [[1.72880196E12, 1640.0]], "isOverall": false, "label": "Bytes sent per second", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.72880196E12, "title": "Bytes Throughput Over Time"}},
        getOptions : function(){
            return {
                series: {
                    lines: {
                        show: true
                    },
                    points: {
                        show: true
                    }
                },
                xaxis: {
                    mode: "time",
                    timeformat: getTimeFormat(this.data.result.granularity),
                    axisLabel: getElapsedTimeLabel(this.data.result.granularity) ,
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Bytes / sec",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                legend: {
                    noColumns: 2,
                    show: true,
                    container: '#legendBytesThroughputOverTime'
                },
                selection: {
                    mode: "xy"
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: "%s at %x was %y"
                }
            };
        },
        createGraph : function() {
            var data = this.data;
            var dataset = prepareData(data.result.series, $("#choicesBytesThroughputOverTime"));
            var options = this.getOptions();
            prepareOptions(options, data);
            $.plot($("#flotBytesThroughputOverTime"), dataset, options);
            // setup overview
            $.plot($("#overviewBytesThroughputOverTime"), dataset, prepareOverviewOptions(options));
        }
};

// Bytes throughput Over Time
function refreshBytesThroughputOverTime(fixTimestamps) {
    var infos = bytesThroughputOverTimeInfos;
    prepareSeries(infos.data);
    if(fixTimestamps) {
        fixTimeStamps(infos.data.result.series, 21600000);
    }
    if(isGraph($("#flotBytesThroughputOverTime"))){
        infos.createGraph();
    }else{
        var choiceContainer = $("#choicesBytesThroughputOverTime");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotBytesThroughputOverTime", "#overviewBytesThroughputOverTime");
        $('#footerBytesThroughputOverTime .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
}

var responseTimesOverTimeInfos = {
        data: {"result": {"minY": 569.1274999999996, "minX": 1.72880196E12, "maxY": 569.1274999999996, "series": [{"data": [[1.72880196E12, 569.1274999999996]], "isOverall": false, "label": "reqres api", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.72880196E12, "title": "Response Time Over Time"}},
        getOptions: function(){
            return {
                series: {
                    lines: {
                        show: true
                    },
                    points: {
                        show: true
                    }
                },
                xaxis: {
                    mode: "time",
                    timeformat: getTimeFormat(this.data.result.granularity),
                    axisLabel: getElapsedTimeLabel(this.data.result.granularity),
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Average response time in ms",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                legend: {
                    noColumns: 2,
                    show: true,
                    container: '#legendResponseTimesOverTime'
                },
                selection: {
                    mode: 'xy'
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: "%s : at %x Average response time was %y ms"
                }
            };
        },
        createGraph: function() {
            var data = this.data;
            var dataset = prepareData(data.result.series, $("#choicesResponseTimesOverTime"));
            var options = this.getOptions();
            prepareOptions(options, data);
            $.plot($("#flotResponseTimesOverTime"), dataset, options);
            // setup overview
            $.plot($("#overviewResponseTimesOverTime"), dataset, prepareOverviewOptions(options));
        }
};

// Response Times Over Time
function refreshResponseTimeOverTime(fixTimestamps) {
    var infos = responseTimesOverTimeInfos;
    prepareSeries(infos.data);
    if(infos.data.result.series.length == 0) {
        setEmptyGraph("#bodyResponseTimeOverTime");
        return;
    }
    if(fixTimestamps) {
        fixTimeStamps(infos.data.result.series, 21600000);
    }
    if(isGraph($("#flotResponseTimesOverTime"))){
        infos.createGraph();
    }else{
        var choiceContainer = $("#choicesResponseTimesOverTime");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotResponseTimesOverTime", "#overviewResponseTimesOverTime");
        $('#footerResponseTimesOverTime .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};

var latenciesOverTimeInfos = {
        data: {"result": {"minY": 550.9749999999993, "minX": 1.72880196E12, "maxY": 550.9749999999993, "series": [{"data": [[1.72880196E12, 550.9749999999993]], "isOverall": false, "label": "reqres api", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.72880196E12, "title": "Latencies Over Time"}},
        getOptions: function() {
            return {
                series: {
                    lines: {
                        show: true
                    },
                    points: {
                        show: true
                    }
                },
                xaxis: {
                    mode: "time",
                    timeformat: getTimeFormat(this.data.result.granularity),
                    axisLabel: getElapsedTimeLabel(this.data.result.granularity),
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Average response latencies in ms",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                legend: {
                    noColumns: 2,
                    show: true,
                    container: '#legendLatenciesOverTime'
                },
                selection: {
                    mode: 'xy'
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: "%s : at %x Average latency was %y ms"
                }
            };
        },
        createGraph: function () {
            var data = this.data;
            var dataset = prepareData(data.result.series, $("#choicesLatenciesOverTime"));
            var options = this.getOptions();
            prepareOptions(options, data);
            $.plot($("#flotLatenciesOverTime"), dataset, options);
            // setup overview
            $.plot($("#overviewLatenciesOverTime"), dataset, prepareOverviewOptions(options));
        }
};

// Latencies Over Time
function refreshLatenciesOverTime(fixTimestamps) {
    var infos = latenciesOverTimeInfos;
    prepareSeries(infos.data);
    if(infos.data.result.series.length == 0) {
        setEmptyGraph("#bodyLatenciesOverTime");
        return;
    }
    if(fixTimestamps) {
        fixTimeStamps(infos.data.result.series, 21600000);
    }
    if(isGraph($("#flotLatenciesOverTime"))) {
        infos.createGraph();
    }else {
        var choiceContainer = $("#choicesLatenciesOverTime");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotLatenciesOverTime", "#overviewLatenciesOverTime");
        $('#footerLatenciesOverTime .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};

var connectTimeOverTimeInfos = {
        data: {"result": {"minY": 352.52000000000004, "minX": 1.72880196E12, "maxY": 352.52000000000004, "series": [{"data": [[1.72880196E12, 352.52000000000004]], "isOverall": false, "label": "reqres api", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.72880196E12, "title": "Connect Time Over Time"}},
        getOptions: function() {
            return {
                series: {
                    lines: {
                        show: true
                    },
                    points: {
                        show: true
                    }
                },
                xaxis: {
                    mode: "time",
                    timeformat: getTimeFormat(this.data.result.granularity),
                    axisLabel: getConnectTimeLabel(this.data.result.granularity),
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Average Connect Time in ms",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                legend: {
                    noColumns: 2,
                    show: true,
                    container: '#legendConnectTimeOverTime'
                },
                selection: {
                    mode: 'xy'
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: "%s : at %x Average connect time was %y ms"
                }
            };
        },
        createGraph: function () {
            var data = this.data;
            var dataset = prepareData(data.result.series, $("#choicesConnectTimeOverTime"));
            var options = this.getOptions();
            prepareOptions(options, data);
            $.plot($("#flotConnectTimeOverTime"), dataset, options);
            // setup overview
            $.plot($("#overviewConnectTimeOverTime"), dataset, prepareOverviewOptions(options));
        }
};

// Connect Time Over Time
function refreshConnectTimeOverTime(fixTimestamps) {
    var infos = connectTimeOverTimeInfos;
    prepareSeries(infos.data);
    if(infos.data.result.series.length == 0) {
        setEmptyGraph("#bodyConnectTimeOverTime");
        return;
    }
    if(fixTimestamps) {
        fixTimeStamps(infos.data.result.series, 21600000);
    }
    if(isGraph($("#flotConnectTimeOverTime"))) {
        infos.createGraph();
    }else {
        var choiceContainer = $("#choicesConnectTimeOverTime");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotConnectTimeOverTime", "#overviewConnectTimeOverTime");
        $('#footerConnectTimeOverTime .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};

var responseTimePercentilesOverTimeInfos = {
        data: {"result": {"minY": 118.0, "minX": 1.72880196E12, "maxY": 2695.0, "series": [{"data": [[1.72880196E12, 2695.0]], "isOverall": false, "label": "Max", "isController": false}, {"data": [[1.72880196E12, 118.0]], "isOverall": false, "label": "Min", "isController": false}, {"data": [[1.72880196E12, 1615.199999999999]], "isOverall": false, "label": "90th percentile", "isController": false}, {"data": [[1.72880196E12, 2667.99]], "isOverall": false, "label": "99th percentile", "isController": false}, {"data": [[1.72880196E12, 278.5]], "isOverall": false, "label": "Median", "isController": false}, {"data": [[1.72880196E12, 2264.85]], "isOverall": false, "label": "95th percentile", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.72880196E12, "title": "Response Time Percentiles Over Time (successful requests only)"}},
        getOptions: function() {
            return {
                series: {
                    lines: {
                        show: true,
                        fill: true
                    },
                    points: {
                        show: true
                    }
                },
                xaxis: {
                    mode: "time",
                    timeformat: getTimeFormat(this.data.result.granularity),
                    axisLabel: getElapsedTimeLabel(this.data.result.granularity),
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Response Time in ms",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                legend: {
                    noColumns: 2,
                    show: true,
                    container: '#legendResponseTimePercentilesOverTime'
                },
                selection: {
                    mode: 'xy'
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: "%s : at %x Response time was %y ms"
                }
            };
        },
        createGraph: function () {
            var data = this.data;
            var dataset = prepareData(data.result.series, $("#choicesResponseTimePercentilesOverTime"));
            var options = this.getOptions();
            prepareOptions(options, data);
            $.plot($("#flotResponseTimePercentilesOverTime"), dataset, options);
            // setup overview
            $.plot($("#overviewResponseTimePercentilesOverTime"), dataset, prepareOverviewOptions(options));
        }
};

// Response Time Percentiles Over Time
function refreshResponseTimePercentilesOverTime(fixTimestamps) {
    var infos = responseTimePercentilesOverTimeInfos;
    prepareSeries(infos.data);
    if(fixTimestamps) {
        fixTimeStamps(infos.data.result.series, 21600000);
    }
    if(isGraph($("#flotResponseTimePercentilesOverTime"))) {
        infos.createGraph();
    }else {
        var choiceContainer = $("#choicesResponseTimePercentilesOverTime");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotResponseTimePercentilesOverTime", "#overviewResponseTimePercentilesOverTime");
        $('#footerResponseTimePercentilesOverTime .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};


var responseTimeVsRequestInfos = {
    data: {"result": {"minY": 163.0, "minX": 46.0, "maxY": 1302.0, "series": [{"data": [[68.0, 173.0], [69.0, 308.0], [73.0, 295.5], [76.0, 163.0], [179.0, 398.0], [46.0, 322.0], [50.0, 379.5], [108.0, 1302.0], [58.0, 194.0]], "isOverall": false, "label": "Successes", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 1000, "maxX": 179.0, "title": "Response Time Vs Request"}},
    getOptions: function() {
        return {
            series: {
                lines: {
                    show: false
                },
                points: {
                    show: true
                }
            },
            xaxis: {
                axisLabel: "Global number of requests per second",
                axisLabelUseCanvas: true,
                axisLabelFontSizePixels: 12,
                axisLabelFontFamily: 'Verdana, Arial',
                axisLabelPadding: 20,
            },
            yaxis: {
                axisLabel: "Median Response Time in ms",
                axisLabelUseCanvas: true,
                axisLabelFontSizePixels: 12,
                axisLabelFontFamily: 'Verdana, Arial',
                axisLabelPadding: 20,
            },
            legend: {
                noColumns: 2,
                show: true,
                container: '#legendResponseTimeVsRequest'
            },
            selection: {
                mode: 'xy'
            },
            grid: {
                hoverable: true // IMPORTANT! this is needed for tooltip to work
            },
            tooltip: true,
            tooltipOpts: {
                content: "%s : Median response time at %x req/s was %y ms"
            },
            colors: ["#9ACD32", "#FF6347"]
        };
    },
    createGraph: function () {
        var data = this.data;
        var dataset = prepareData(data.result.series, $("#choicesResponseTimeVsRequest"));
        var options = this.getOptions();
        prepareOptions(options, data);
        $.plot($("#flotResponseTimeVsRequest"), dataset, options);
        // setup overview
        $.plot($("#overviewResponseTimeVsRequest"), dataset, prepareOverviewOptions(options));

    }
};

// Response Time vs Request
function refreshResponseTimeVsRequest() {
    var infos = responseTimeVsRequestInfos;
    prepareSeries(infos.data);
    if (isGraph($("#flotResponseTimeVsRequest"))){
        infos.createGraph();
    }else{
        var choiceContainer = $("#choicesResponseTimeVsRequest");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotResponseTimeVsRequest", "#overviewResponseTimeVsRequest");
        $('#footerResponseRimeVsRequest .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};


var latenciesVsRequestInfos = {
    data: {"result": {"minY": 163.0, "minX": 46.0, "maxY": 1286.0, "series": [{"data": [[68.0, 173.0], [69.0, 307.0], [73.0, 295.5], [76.0, 163.0], [179.0, 331.0], [46.0, 321.5], [50.0, 377.0], [108.0, 1286.0], [58.0, 194.0]], "isOverall": false, "label": "Successes", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 1000, "maxX": 179.0, "title": "Latencies Vs Request"}},
    getOptions: function() {
        return{
            series: {
                lines: {
                    show: false
                },
                points: {
                    show: true
                }
            },
            xaxis: {
                axisLabel: "Global number of requests per second",
                axisLabelUseCanvas: true,
                axisLabelFontSizePixels: 12,
                axisLabelFontFamily: 'Verdana, Arial',
                axisLabelPadding: 20,
            },
            yaxis: {
                axisLabel: "Median Latency in ms",
                axisLabelUseCanvas: true,
                axisLabelFontSizePixels: 12,
                axisLabelFontFamily: 'Verdana, Arial',
                axisLabelPadding: 20,
            },
            legend: { noColumns: 2,show: true, container: '#legendLatencyVsRequest' },
            selection: {
                mode: 'xy'
            },
            grid: {
                hoverable: true // IMPORTANT! this is needed for tooltip to work
            },
            tooltip: true,
            tooltipOpts: {
                content: "%s : Median Latency time at %x req/s was %y ms"
            },
            colors: ["#9ACD32", "#FF6347"]
        };
    },
    createGraph: function () {
        var data = this.data;
        var dataset = prepareData(data.result.series, $("#choicesLatencyVsRequest"));
        var options = this.getOptions();
        prepareOptions(options, data);
        $.plot($("#flotLatenciesVsRequest"), dataset, options);
        // setup overview
        $.plot($("#overviewLatenciesVsRequest"), dataset, prepareOverviewOptions(options));
    }
};

// Latencies vs Request
function refreshLatenciesVsRequest() {
        var infos = latenciesVsRequestInfos;
        prepareSeries(infos.data);
        if(isGraph($("#flotLatenciesVsRequest"))){
            infos.createGraph();
        }else{
            var choiceContainer = $("#choicesLatencyVsRequest");
            createLegend(choiceContainer, infos);
            infos.createGraph();
            setGraphZoomable("#flotLatenciesVsRequest", "#overviewLatenciesVsRequest");
            $('#footerLatenciesVsRequest .legendColorBox > div').each(function(i){
                $(this).clone().prependTo(choiceContainer.find("li").eq(i));
            });
        }
};

var hitsPerSecondInfos = {
        data: {"result": {"minY": 13.333333333333334, "minX": 1.72880196E12, "maxY": 13.333333333333334, "series": [{"data": [[1.72880196E12, 13.333333333333334]], "isOverall": false, "label": "hitsPerSecond", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.72880196E12, "title": "Hits Per Second"}},
        getOptions: function() {
            return {
                series: {
                    lines: {
                        show: true
                    },
                    points: {
                        show: true
                    }
                },
                xaxis: {
                    mode: "time",
                    timeformat: getTimeFormat(this.data.result.granularity),
                    axisLabel: getElapsedTimeLabel(this.data.result.granularity),
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Number of hits / sec",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20
                },
                legend: {
                    noColumns: 2,
                    show: true,
                    container: "#legendHitsPerSecond"
                },
                selection: {
                    mode : 'xy'
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: "%s at %x was %y.2 hits/sec"
                }
            };
        },
        createGraph: function createGraph() {
            var data = this.data;
            var dataset = prepareData(data.result.series, $("#choicesHitsPerSecond"));
            var options = this.getOptions();
            prepareOptions(options, data);
            $.plot($("#flotHitsPerSecond"), dataset, options);
            // setup overview
            $.plot($("#overviewHitsPerSecond"), dataset, prepareOverviewOptions(options));
        }
};

// Hits per second
function refreshHitsPerSecond(fixTimestamps) {
    var infos = hitsPerSecondInfos;
    prepareSeries(infos.data);
    if(fixTimestamps) {
        fixTimeStamps(infos.data.result.series, 21600000);
    }
    if (isGraph($("#flotHitsPerSecond"))){
        infos.createGraph();
    }else{
        var choiceContainer = $("#choicesHitsPerSecond");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotHitsPerSecond", "#overviewHitsPerSecond");
        $('#footerHitsPerSecond .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
}

var codesPerSecondInfos = {
        data: {"result": {"minY": 13.333333333333334, "minX": 1.72880196E12, "maxY": 13.333333333333334, "series": [{"data": [[1.72880196E12, 13.333333333333334]], "isOverall": false, "label": "200", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.72880196E12, "title": "Codes Per Second"}},
        getOptions: function(){
            return {
                series: {
                    lines: {
                        show: true
                    },
                    points: {
                        show: true
                    }
                },
                xaxis: {
                    mode: "time",
                    timeformat: getTimeFormat(this.data.result.granularity),
                    axisLabel: getElapsedTimeLabel(this.data.result.granularity),
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Number of responses / sec",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                legend: {
                    noColumns: 2,
                    show: true,
                    container: "#legendCodesPerSecond"
                },
                selection: {
                    mode: 'xy'
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: "Number of Response Codes %s at %x was %y.2 responses / sec"
                }
            };
        },
    createGraph: function() {
        var data = this.data;
        var dataset = prepareData(data.result.series, $("#choicesCodesPerSecond"));
        var options = this.getOptions();
        prepareOptions(options, data);
        $.plot($("#flotCodesPerSecond"), dataset, options);
        // setup overview
        $.plot($("#overviewCodesPerSecond"), dataset, prepareOverviewOptions(options));
    }
};

// Codes per second
function refreshCodesPerSecond(fixTimestamps) {
    var infos = codesPerSecondInfos;
    prepareSeries(infos.data);
    if(fixTimestamps) {
        fixTimeStamps(infos.data.result.series, 21600000);
    }
    if(isGraph($("#flotCodesPerSecond"))){
        infos.createGraph();
    }else{
        var choiceContainer = $("#choicesCodesPerSecond");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotCodesPerSecond", "#overviewCodesPerSecond");
        $('#footerCodesPerSecond .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};

var transactionsPerSecondInfos = {
        data: {"result": {"minY": 13.333333333333334, "minX": 1.72880196E12, "maxY": 13.333333333333334, "series": [{"data": [[1.72880196E12, 13.333333333333334]], "isOverall": false, "label": "reqres api-success", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.72880196E12, "title": "Transactions Per Second"}},
        getOptions: function(){
            return {
                series: {
                    lines: {
                        show: true
                    },
                    points: {
                        show: true
                    }
                },
                xaxis: {
                    mode: "time",
                    timeformat: getTimeFormat(this.data.result.granularity),
                    axisLabel: getElapsedTimeLabel(this.data.result.granularity),
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Number of transactions / sec",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20
                },
                legend: {
                    noColumns: 2,
                    show: true,
                    container: "#legendTransactionsPerSecond"
                },
                selection: {
                    mode: 'xy'
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: "%s at %x was %y transactions / sec"
                }
            };
        },
    createGraph: function () {
        var data = this.data;
        var dataset = prepareData(data.result.series, $("#choicesTransactionsPerSecond"));
        var options = this.getOptions();
        prepareOptions(options, data);
        $.plot($("#flotTransactionsPerSecond"), dataset, options);
        // setup overview
        $.plot($("#overviewTransactionsPerSecond"), dataset, prepareOverviewOptions(options));
    }
};

// Transactions per second
function refreshTransactionsPerSecond(fixTimestamps) {
    var infos = transactionsPerSecondInfos;
    prepareSeries(infos.data);
    if(infos.data.result.series.length == 0) {
        setEmptyGraph("#bodyTransactionsPerSecond");
        return;
    }
    if(fixTimestamps) {
        fixTimeStamps(infos.data.result.series, 21600000);
    }
    if(isGraph($("#flotTransactionsPerSecond"))){
        infos.createGraph();
    }else{
        var choiceContainer = $("#choicesTransactionsPerSecond");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotTransactionsPerSecond", "#overviewTransactionsPerSecond");
        $('#footerTransactionsPerSecond .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};

var totalTPSInfos = {
        data: {"result": {"minY": 13.333333333333334, "minX": 1.72880196E12, "maxY": 13.333333333333334, "series": [{"data": [[1.72880196E12, 13.333333333333334]], "isOverall": false, "label": "Transaction-success", "isController": false}, {"data": [], "isOverall": false, "label": "Transaction-failure", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.72880196E12, "title": "Total Transactions Per Second"}},
        getOptions: function(){
            return {
                series: {
                    lines: {
                        show: true
                    },
                    points: {
                        show: true
                    }
                },
                xaxis: {
                    mode: "time",
                    timeformat: getTimeFormat(this.data.result.granularity),
                    axisLabel: getElapsedTimeLabel(this.data.result.granularity),
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Number of transactions / sec",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20
                },
                legend: {
                    noColumns: 2,
                    show: true,
                    container: "#legendTotalTPS"
                },
                selection: {
                    mode: 'xy'
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: "%s at %x was %y transactions / sec"
                },
                colors: ["#9ACD32", "#FF6347"]
            };
        },
    createGraph: function () {
        var data = this.data;
        var dataset = prepareData(data.result.series, $("#choicesTotalTPS"));
        var options = this.getOptions();
        prepareOptions(options, data);
        $.plot($("#flotTotalTPS"), dataset, options);
        // setup overview
        $.plot($("#overviewTotalTPS"), dataset, prepareOverviewOptions(options));
    }
};

// Total Transactions per second
function refreshTotalTPS(fixTimestamps) {
    var infos = totalTPSInfos;
    // We want to ignore seriesFilter
    prepareSeries(infos.data, false, true);
    if(fixTimestamps) {
        fixTimeStamps(infos.data.result.series, 21600000);
    }
    if(isGraph($("#flotTotalTPS"))){
        infos.createGraph();
    }else{
        var choiceContainer = $("#choicesTotalTPS");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotTotalTPS", "#overviewTotalTPS");
        $('#footerTotalTPS .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};

// Collapse the graph matching the specified DOM element depending the collapsed
// status
function collapse(elem, collapsed){
    if(collapsed){
        $(elem).parent().find(".fa-chevron-up").removeClass("fa-chevron-up").addClass("fa-chevron-down");
    } else {
        $(elem).parent().find(".fa-chevron-down").removeClass("fa-chevron-down").addClass("fa-chevron-up");
        if (elem.id == "bodyBytesThroughputOverTime") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshBytesThroughputOverTime(true);
            }
            document.location.href="#bytesThroughputOverTime";
        } else if (elem.id == "bodyLatenciesOverTime") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshLatenciesOverTime(true);
            }
            document.location.href="#latenciesOverTime";
        } else if (elem.id == "bodyCustomGraph") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshCustomGraph(true);
            }
            document.location.href="#responseCustomGraph";
        } else if (elem.id == "bodyConnectTimeOverTime") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshConnectTimeOverTime(true);
            }
            document.location.href="#connectTimeOverTime";
        } else if (elem.id == "bodyResponseTimePercentilesOverTime") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshResponseTimePercentilesOverTime(true);
            }
            document.location.href="#responseTimePercentilesOverTime";
        } else if (elem.id == "bodyResponseTimeDistribution") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshResponseTimeDistribution();
            }
            document.location.href="#responseTimeDistribution" ;
        } else if (elem.id == "bodySyntheticResponseTimeDistribution") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshSyntheticResponseTimeDistribution();
            }
            document.location.href="#syntheticResponseTimeDistribution" ;
        } else if (elem.id == "bodyActiveThreadsOverTime") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshActiveThreadsOverTime(true);
            }
            document.location.href="#activeThreadsOverTime";
        } else if (elem.id == "bodyTimeVsThreads") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshTimeVsThreads();
            }
            document.location.href="#timeVsThreads" ;
        } else if (elem.id == "bodyCodesPerSecond") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshCodesPerSecond(true);
            }
            document.location.href="#codesPerSecond";
        } else if (elem.id == "bodyTransactionsPerSecond") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshTransactionsPerSecond(true);
            }
            document.location.href="#transactionsPerSecond";
        } else if (elem.id == "bodyTotalTPS") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshTotalTPS(true);
            }
            document.location.href="#totalTPS";
        } else if (elem.id == "bodyResponseTimeVsRequest") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshResponseTimeVsRequest();
            }
            document.location.href="#responseTimeVsRequest";
        } else if (elem.id == "bodyLatenciesVsRequest") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshLatenciesVsRequest();
            }
            document.location.href="#latencyVsRequest";
        }
    }
}

/*
 * Activates or deactivates all series of the specified graph (represented by id parameter)
 * depending on checked argument.
 */
function toggleAll(id, checked){
    var placeholder = document.getElementById(id);

    var cases = $(placeholder).find(':checkbox');
    cases.prop('checked', checked);
    $(cases).parent().children().children().toggleClass("legend-disabled", !checked);

    var choiceContainer;
    if ( id == "choicesBytesThroughputOverTime"){
        choiceContainer = $("#choicesBytesThroughputOverTime");
        refreshBytesThroughputOverTime(false);
    } else if(id == "choicesResponseTimesOverTime"){
        choiceContainer = $("#choicesResponseTimesOverTime");
        refreshResponseTimeOverTime(false);
    }else if(id == "choicesResponseCustomGraph"){
        choiceContainer = $("#choicesResponseCustomGraph");
        refreshCustomGraph(false);
    } else if ( id == "choicesLatenciesOverTime"){
        choiceContainer = $("#choicesLatenciesOverTime");
        refreshLatenciesOverTime(false);
    } else if ( id == "choicesConnectTimeOverTime"){
        choiceContainer = $("#choicesConnectTimeOverTime");
        refreshConnectTimeOverTime(false);
    } else if ( id == "choicesResponseTimePercentilesOverTime"){
        choiceContainer = $("#choicesResponseTimePercentilesOverTime");
        refreshResponseTimePercentilesOverTime(false);
    } else if ( id == "choicesResponseTimePercentiles"){
        choiceContainer = $("#choicesResponseTimePercentiles");
        refreshResponseTimePercentiles();
    } else if(id == "choicesActiveThreadsOverTime"){
        choiceContainer = $("#choicesActiveThreadsOverTime");
        refreshActiveThreadsOverTime(false);
    } else if ( id == "choicesTimeVsThreads"){
        choiceContainer = $("#choicesTimeVsThreads");
        refreshTimeVsThreads();
    } else if ( id == "choicesSyntheticResponseTimeDistribution"){
        choiceContainer = $("#choicesSyntheticResponseTimeDistribution");
        refreshSyntheticResponseTimeDistribution();
    } else if ( id == "choicesResponseTimeDistribution"){
        choiceContainer = $("#choicesResponseTimeDistribution");
        refreshResponseTimeDistribution();
    } else if ( id == "choicesHitsPerSecond"){
        choiceContainer = $("#choicesHitsPerSecond");
        refreshHitsPerSecond(false);
    } else if(id == "choicesCodesPerSecond"){
        choiceContainer = $("#choicesCodesPerSecond");
        refreshCodesPerSecond(false);
    } else if ( id == "choicesTransactionsPerSecond"){
        choiceContainer = $("#choicesTransactionsPerSecond");
        refreshTransactionsPerSecond(false);
    } else if ( id == "choicesTotalTPS"){
        choiceContainer = $("#choicesTotalTPS");
        refreshTotalTPS(false);
    } else if ( id == "choicesResponseTimeVsRequest"){
        choiceContainer = $("#choicesResponseTimeVsRequest");
        refreshResponseTimeVsRequest();
    } else if ( id == "choicesLatencyVsRequest"){
        choiceContainer = $("#choicesLatencyVsRequest");
        refreshLatenciesVsRequest();
    }
    var color = checked ? "black" : "#818181";
    if(choiceContainer != null) {
        choiceContainer.find("label").each(function(){
            this.style.color = color;
        });
    }
}

