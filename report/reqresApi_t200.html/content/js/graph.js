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
        data: {"result": {"minY": 121.0, "minX": 0.0, "maxY": 1514.0, "series": [{"data": [[0.0, 121.0], [0.1, 121.0], [0.2, 121.0], [0.3, 121.0], [0.4, 121.0], [0.5, 124.0], [0.6, 124.0], [0.7, 124.0], [0.8, 124.0], [0.9, 124.0], [1.0, 133.0], [1.1, 133.0], [1.2, 133.0], [1.3, 133.0], [1.4, 133.0], [1.5, 134.0], [1.6, 134.0], [1.7, 134.0], [1.8, 134.0], [1.9, 134.0], [2.0, 140.0], [2.1, 140.0], [2.2, 140.0], [2.3, 140.0], [2.4, 140.0], [2.5, 141.0], [2.6, 141.0], [2.7, 141.0], [2.8, 141.0], [2.9, 141.0], [3.0, 145.0], [3.1, 145.0], [3.2, 145.0], [3.3, 145.0], [3.4, 145.0], [3.5, 146.0], [3.6, 146.0], [3.7, 146.0], [3.8, 146.0], [3.9, 146.0], [4.0, 147.0], [4.1, 147.0], [4.2, 147.0], [4.3, 147.0], [4.4, 147.0], [4.5, 148.0], [4.6, 148.0], [4.7, 148.0], [4.8, 148.0], [4.9, 148.0], [5.0, 148.0], [5.1, 148.0], [5.2, 148.0], [5.3, 148.0], [5.4, 148.0], [5.5, 149.0], [5.6, 149.0], [5.7, 149.0], [5.8, 149.0], [5.9, 149.0], [6.0, 151.0], [6.1, 151.0], [6.2, 151.0], [6.3, 151.0], [6.4, 151.0], [6.5, 151.0], [6.6, 151.0], [6.7, 151.0], [6.8, 151.0], [6.9, 151.0], [7.0, 151.0], [7.1, 151.0], [7.2, 151.0], [7.3, 151.0], [7.4, 151.0], [7.5, 154.0], [7.6, 154.0], [7.7, 154.0], [7.8, 154.0], [7.9, 154.0], [8.0, 154.0], [8.1, 154.0], [8.2, 154.0], [8.3, 154.0], [8.4, 154.0], [8.5, 155.0], [8.6, 155.0], [8.7, 155.0], [8.8, 155.0], [8.9, 155.0], [9.0, 156.0], [9.1, 156.0], [9.2, 156.0], [9.3, 156.0], [9.4, 156.0], [9.5, 156.0], [9.6, 156.0], [9.7, 156.0], [9.8, 156.0], [9.9, 156.0], [10.0, 156.0], [10.1, 156.0], [10.2, 156.0], [10.3, 156.0], [10.4, 156.0], [10.5, 157.0], [10.6, 157.0], [10.7, 157.0], [10.8, 157.0], [10.9, 157.0], [11.0, 158.0], [11.1, 158.0], [11.2, 158.0], [11.3, 158.0], [11.4, 158.0], [11.5, 158.0], [11.6, 158.0], [11.7, 158.0], [11.8, 158.0], [11.9, 158.0], [12.0, 161.0], [12.1, 161.0], [12.2, 161.0], [12.3, 161.0], [12.4, 161.0], [12.5, 162.0], [12.6, 162.0], [12.7, 162.0], [12.8, 162.0], [12.9, 162.0], [13.0, 162.0], [13.1, 162.0], [13.2, 162.0], [13.3, 162.0], [13.4, 162.0], [13.5, 162.0], [13.6, 162.0], [13.7, 162.0], [13.8, 162.0], [13.9, 162.0], [14.0, 164.0], [14.1, 164.0], [14.2, 164.0], [14.3, 164.0], [14.4, 164.0], [14.5, 166.0], [14.6, 166.0], [14.7, 166.0], [14.8, 166.0], [14.9, 166.0], [15.0, 166.0], [15.1, 166.0], [15.2, 166.0], [15.3, 166.0], [15.4, 166.0], [15.5, 166.0], [15.6, 166.0], [15.7, 166.0], [15.8, 166.0], [15.9, 166.0], [16.0, 166.0], [16.1, 166.0], [16.2, 166.0], [16.3, 166.0], [16.4, 166.0], [16.5, 168.0], [16.6, 168.0], [16.7, 168.0], [16.8, 168.0], [16.9, 168.0], [17.0, 169.0], [17.1, 169.0], [17.2, 169.0], [17.3, 169.0], [17.4, 169.0], [17.5, 170.0], [17.6, 170.0], [17.7, 170.0], [17.8, 170.0], [17.9, 170.0], [18.0, 170.0], [18.1, 170.0], [18.2, 170.0], [18.3, 170.0], [18.4, 170.0], [18.5, 171.0], [18.6, 171.0], [18.7, 171.0], [18.8, 171.0], [18.9, 171.0], [19.0, 171.0], [19.1, 171.0], [19.2, 171.0], [19.3, 171.0], [19.4, 171.0], [19.5, 171.0], [19.6, 171.0], [19.7, 171.0], [19.8, 171.0], [19.9, 171.0], [20.0, 172.0], [20.1, 172.0], [20.2, 172.0], [20.3, 172.0], [20.4, 172.0], [20.5, 172.0], [20.6, 172.0], [20.7, 172.0], [20.8, 172.0], [20.9, 172.0], [21.0, 172.0], [21.1, 172.0], [21.2, 172.0], [21.3, 172.0], [21.4, 172.0], [21.5, 173.0], [21.6, 173.0], [21.7, 173.0], [21.8, 173.0], [21.9, 173.0], [22.0, 176.0], [22.1, 176.0], [22.2, 176.0], [22.3, 176.0], [22.4, 176.0], [22.5, 177.0], [22.6, 177.0], [22.7, 177.0], [22.8, 177.0], [22.9, 177.0], [23.0, 177.0], [23.1, 177.0], [23.2, 177.0], [23.3, 177.0], [23.4, 177.0], [23.5, 181.0], [23.6, 181.0], [23.7, 181.0], [23.8, 181.0], [23.9, 181.0], [24.0, 182.0], [24.1, 182.0], [24.2, 182.0], [24.3, 182.0], [24.4, 182.0], [24.5, 183.0], [24.6, 183.0], [24.7, 183.0], [24.8, 183.0], [24.9, 183.0], [25.0, 183.0], [25.1, 183.0], [25.2, 183.0], [25.3, 183.0], [25.4, 183.0], [25.5, 184.0], [25.6, 184.0], [25.7, 184.0], [25.8, 184.0], [25.9, 184.0], [26.0, 184.0], [26.1, 184.0], [26.2, 184.0], [26.3, 184.0], [26.4, 184.0], [26.5, 184.0], [26.6, 184.0], [26.7, 184.0], [26.8, 184.0], [26.9, 184.0], [27.0, 187.0], [27.1, 187.0], [27.2, 187.0], [27.3, 187.0], [27.4, 187.0], [27.5, 187.0], [27.6, 187.0], [27.7, 187.0], [27.8, 187.0], [27.9, 187.0], [28.0, 187.0], [28.1, 187.0], [28.2, 187.0], [28.3, 187.0], [28.4, 187.0], [28.5, 187.0], [28.6, 187.0], [28.7, 187.0], [28.8, 187.0], [28.9, 187.0], [29.0, 187.0], [29.1, 187.0], [29.2, 187.0], [29.3, 187.0], [29.4, 187.0], [29.5, 188.0], [29.6, 188.0], [29.7, 188.0], [29.8, 188.0], [29.9, 188.0], [30.0, 188.0], [30.1, 188.0], [30.2, 188.0], [30.3, 188.0], [30.4, 188.0], [30.5, 189.0], [30.6, 189.0], [30.7, 189.0], [30.8, 189.0], [30.9, 189.0], [31.0, 191.0], [31.1, 191.0], [31.2, 191.0], [31.3, 191.0], [31.4, 191.0], [31.5, 193.0], [31.6, 193.0], [31.7, 193.0], [31.8, 193.0], [31.9, 193.0], [32.0, 193.0], [32.1, 193.0], [32.2, 193.0], [32.3, 193.0], [32.4, 193.0], [32.5, 194.0], [32.6, 194.0], [32.7, 194.0], [32.8, 194.0], [32.9, 194.0], [33.0, 195.0], [33.1, 195.0], [33.2, 195.0], [33.3, 195.0], [33.4, 195.0], [33.5, 196.0], [33.6, 196.0], [33.7, 196.0], [33.8, 196.0], [33.9, 196.0], [34.0, 196.0], [34.1, 196.0], [34.2, 196.0], [34.3, 196.0], [34.4, 196.0], [34.5, 197.0], [34.6, 197.0], [34.7, 197.0], [34.8, 197.0], [34.9, 197.0], [35.0, 197.0], [35.1, 197.0], [35.2, 197.0], [35.3, 197.0], [35.4, 197.0], [35.5, 197.0], [35.6, 197.0], [35.7, 197.0], [35.8, 197.0], [35.9, 197.0], [36.0, 198.0], [36.1, 198.0], [36.2, 198.0], [36.3, 198.0], [36.4, 198.0], [36.5, 199.0], [36.6, 199.0], [36.7, 199.0], [36.8, 199.0], [36.9, 199.0], [37.0, 200.0], [37.1, 200.0], [37.2, 200.0], [37.3, 200.0], [37.4, 200.0], [37.5, 200.0], [37.6, 200.0], [37.7, 200.0], [37.8, 200.0], [37.9, 200.0], [38.0, 200.0], [38.1, 200.0], [38.2, 200.0], [38.3, 200.0], [38.4, 200.0], [38.5, 200.0], [38.6, 200.0], [38.7, 200.0], [38.8, 200.0], [38.9, 200.0], [39.0, 201.0], [39.1, 201.0], [39.2, 201.0], [39.3, 201.0], [39.4, 201.0], [39.5, 202.0], [39.6, 202.0], [39.7, 202.0], [39.8, 202.0], [39.9, 202.0], [40.0, 202.0], [40.1, 202.0], [40.2, 202.0], [40.3, 202.0], [40.4, 202.0], [40.5, 203.0], [40.6, 203.0], [40.7, 203.0], [40.8, 203.0], [40.9, 203.0], [41.0, 203.0], [41.1, 203.0], [41.2, 203.0], [41.3, 203.0], [41.4, 203.0], [41.5, 204.0], [41.6, 204.0], [41.7, 204.0], [41.8, 204.0], [41.9, 204.0], [42.0, 204.0], [42.1, 204.0], [42.2, 204.0], [42.3, 204.0], [42.4, 204.0], [42.5, 205.0], [42.6, 205.0], [42.7, 205.0], [42.8, 205.0], [42.9, 205.0], [43.0, 205.0], [43.1, 205.0], [43.2, 205.0], [43.3, 205.0], [43.4, 205.0], [43.5, 206.0], [43.6, 206.0], [43.7, 206.0], [43.8, 206.0], [43.9, 206.0], [44.0, 206.0], [44.1, 206.0], [44.2, 206.0], [44.3, 206.0], [44.4, 206.0], [44.5, 206.0], [44.6, 206.0], [44.7, 206.0], [44.8, 206.0], [44.9, 206.0], [45.0, 206.0], [45.1, 206.0], [45.2, 206.0], [45.3, 206.0], [45.4, 206.0], [45.5, 208.0], [45.6, 208.0], [45.7, 208.0], [45.8, 208.0], [45.9, 208.0], [46.0, 208.0], [46.1, 208.0], [46.2, 208.0], [46.3, 208.0], [46.4, 208.0], [46.5, 209.0], [46.6, 209.0], [46.7, 209.0], [46.8, 209.0], [46.9, 209.0], [47.0, 209.0], [47.1, 209.0], [47.2, 209.0], [47.3, 209.0], [47.4, 209.0], [47.5, 213.0], [47.6, 213.0], [47.7, 213.0], [47.8, 213.0], [47.9, 213.0], [48.0, 216.0], [48.1, 216.0], [48.2, 216.0], [48.3, 216.0], [48.4, 216.0], [48.5, 218.0], [48.6, 218.0], [48.7, 218.0], [48.8, 218.0], [48.9, 218.0], [49.0, 219.0], [49.1, 219.0], [49.2, 219.0], [49.3, 219.0], [49.4, 219.0], [49.5, 219.0], [49.6, 219.0], [49.7, 219.0], [49.8, 219.0], [49.9, 219.0], [50.0, 219.0], [50.1, 219.0], [50.2, 219.0], [50.3, 219.0], [50.4, 219.0], [50.5, 220.0], [50.6, 220.0], [50.7, 220.0], [50.8, 220.0], [50.9, 220.0], [51.0, 222.0], [51.1, 222.0], [51.2, 222.0], [51.3, 222.0], [51.4, 222.0], [51.5, 223.0], [51.6, 223.0], [51.7, 223.0], [51.8, 223.0], [51.9, 223.0], [52.0, 228.0], [52.1, 228.0], [52.2, 228.0], [52.3, 228.0], [52.4, 228.0], [52.5, 229.0], [52.6, 229.0], [52.7, 229.0], [52.8, 229.0], [52.9, 229.0], [53.0, 230.0], [53.1, 230.0], [53.2, 230.0], [53.3, 230.0], [53.4, 230.0], [53.5, 231.0], [53.6, 231.0], [53.7, 231.0], [53.8, 231.0], [53.9, 231.0], [54.0, 234.0], [54.1, 234.0], [54.2, 234.0], [54.3, 234.0], [54.4, 234.0], [54.5, 234.0], [54.6, 234.0], [54.7, 234.0], [54.8, 234.0], [54.9, 234.0], [55.0, 235.0], [55.1, 235.0], [55.2, 235.0], [55.3, 235.0], [55.4, 235.0], [55.5, 236.0], [55.6, 236.0], [55.7, 236.0], [55.8, 236.0], [55.9, 236.0], [56.0, 239.0], [56.1, 239.0], [56.2, 239.0], [56.3, 239.0], [56.4, 239.0], [56.5, 239.0], [56.6, 239.0], [56.7, 239.0], [56.8, 239.0], [56.9, 239.0], [57.0, 242.0], [57.1, 242.0], [57.2, 242.0], [57.3, 242.0], [57.4, 242.0], [57.5, 243.0], [57.6, 243.0], [57.7, 243.0], [57.8, 243.0], [57.9, 243.0], [58.0, 244.0], [58.1, 244.0], [58.2, 244.0], [58.3, 244.0], [58.4, 244.0], [58.5, 246.0], [58.6, 246.0], [58.7, 246.0], [58.8, 246.0], [58.9, 246.0], [59.0, 247.0], [59.1, 247.0], [59.2, 247.0], [59.3, 247.0], [59.4, 247.0], [59.5, 250.0], [59.6, 250.0], [59.7, 250.0], [59.8, 250.0], [59.9, 250.0], [60.0, 250.0], [60.1, 250.0], [60.2, 250.0], [60.3, 250.0], [60.4, 250.0], [60.5, 251.0], [60.6, 251.0], [60.7, 251.0], [60.8, 251.0], [60.9, 251.0], [61.0, 252.0], [61.1, 252.0], [61.2, 252.0], [61.3, 252.0], [61.4, 252.0], [61.5, 253.0], [61.6, 253.0], [61.7, 253.0], [61.8, 253.0], [61.9, 253.0], [62.0, 254.0], [62.1, 254.0], [62.2, 254.0], [62.3, 254.0], [62.4, 254.0], [62.5, 256.0], [62.6, 256.0], [62.7, 256.0], [62.8, 256.0], [62.9, 256.0], [63.0, 257.0], [63.1, 257.0], [63.2, 257.0], [63.3, 257.0], [63.4, 257.0], [63.5, 258.0], [63.6, 258.0], [63.7, 258.0], [63.8, 258.0], [63.9, 258.0], [64.0, 258.0], [64.1, 258.0], [64.2, 258.0], [64.3, 258.0], [64.4, 258.0], [64.5, 258.0], [64.6, 258.0], [64.7, 258.0], [64.8, 258.0], [64.9, 258.0], [65.0, 262.0], [65.1, 262.0], [65.2, 262.0], [65.3, 262.0], [65.4, 262.0], [65.5, 265.0], [65.6, 265.0], [65.7, 265.0], [65.8, 265.0], [65.9, 265.0], [66.0, 267.0], [66.1, 267.0], [66.2, 267.0], [66.3, 267.0], [66.4, 267.0], [66.5, 268.0], [66.6, 268.0], [66.7, 268.0], [66.8, 268.0], [66.9, 268.0], [67.0, 268.0], [67.1, 268.0], [67.2, 268.0], [67.3, 268.0], [67.4, 268.0], [67.5, 269.0], [67.6, 269.0], [67.7, 269.0], [67.8, 269.0], [67.9, 269.0], [68.0, 273.0], [68.1, 273.0], [68.2, 273.0], [68.3, 273.0], [68.4, 273.0], [68.5, 274.0], [68.6, 274.0], [68.7, 274.0], [68.8, 274.0], [68.9, 274.0], [69.0, 278.0], [69.1, 278.0], [69.2, 278.0], [69.3, 278.0], [69.4, 278.0], [69.5, 278.0], [69.6, 278.0], [69.7, 278.0], [69.8, 278.0], [69.9, 278.0], [70.0, 285.0], [70.1, 285.0], [70.2, 285.0], [70.3, 285.0], [70.4, 285.0], [70.5, 288.0], [70.6, 288.0], [70.7, 288.0], [70.8, 288.0], [70.9, 288.0], [71.0, 291.0], [71.1, 291.0], [71.2, 291.0], [71.3, 291.0], [71.4, 291.0], [71.5, 292.0], [71.6, 292.0], [71.7, 292.0], [71.8, 292.0], [71.9, 292.0], [72.0, 292.0], [72.1, 292.0], [72.2, 292.0], [72.3, 292.0], [72.4, 292.0], [72.5, 296.0], [72.6, 296.0], [72.7, 296.0], [72.8, 296.0], [72.9, 296.0], [73.0, 296.0], [73.1, 296.0], [73.2, 296.0], [73.3, 296.0], [73.4, 296.0], [73.5, 299.0], [73.6, 299.0], [73.7, 299.0], [73.8, 299.0], [73.9, 299.0], [74.0, 300.0], [74.1, 300.0], [74.2, 300.0], [74.3, 300.0], [74.4, 300.0], [74.5, 300.0], [74.6, 300.0], [74.7, 300.0], [74.8, 300.0], [74.9, 300.0], [75.0, 301.0], [75.1, 301.0], [75.2, 301.0], [75.3, 301.0], [75.4, 301.0], [75.5, 302.0], [75.6, 302.0], [75.7, 302.0], [75.8, 302.0], [75.9, 302.0], [76.0, 304.0], [76.1, 304.0], [76.2, 304.0], [76.3, 304.0], [76.4, 304.0], [76.5, 305.0], [76.6, 305.0], [76.7, 305.0], [76.8, 305.0], [76.9, 305.0], [77.0, 308.0], [77.1, 308.0], [77.2, 308.0], [77.3, 308.0], [77.4, 308.0], [77.5, 308.0], [77.6, 308.0], [77.7, 308.0], [77.8, 308.0], [77.9, 308.0], [78.0, 312.0], [78.1, 312.0], [78.2, 312.0], [78.3, 312.0], [78.4, 312.0], [78.5, 316.0], [78.6, 316.0], [78.7, 316.0], [78.8, 316.0], [78.9, 316.0], [79.0, 319.0], [79.1, 319.0], [79.2, 319.0], [79.3, 319.0], [79.4, 319.0], [79.5, 322.0], [79.6, 322.0], [79.7, 322.0], [79.8, 322.0], [79.9, 322.0], [80.0, 325.0], [80.1, 325.0], [80.2, 325.0], [80.3, 325.0], [80.4, 325.0], [80.5, 349.0], [80.6, 349.0], [80.7, 349.0], [80.8, 349.0], [80.9, 349.0], [81.0, 351.0], [81.1, 351.0], [81.2, 351.0], [81.3, 351.0], [81.4, 351.0], [81.5, 361.0], [81.6, 361.0], [81.7, 361.0], [81.8, 361.0], [81.9, 361.0], [82.0, 386.0], [82.1, 386.0], [82.2, 386.0], [82.3, 386.0], [82.4, 386.0], [82.5, 393.0], [82.6, 393.0], [82.7, 393.0], [82.8, 393.0], [82.9, 393.0], [83.0, 398.0], [83.1, 398.0], [83.2, 398.0], [83.3, 398.0], [83.4, 398.0], [83.5, 408.0], [83.6, 408.0], [83.7, 408.0], [83.8, 408.0], [83.9, 408.0], [84.0, 412.0], [84.1, 412.0], [84.2, 412.0], [84.3, 412.0], [84.4, 412.0], [84.5, 415.0], [84.6, 415.0], [84.7, 415.0], [84.8, 415.0], [84.9, 415.0], [85.0, 418.0], [85.1, 418.0], [85.2, 418.0], [85.3, 418.0], [85.4, 418.0], [85.5, 440.0], [85.6, 440.0], [85.7, 440.0], [85.8, 440.0], [85.9, 440.0], [86.0, 469.0], [86.1, 469.0], [86.2, 469.0], [86.3, 469.0], [86.4, 469.0], [86.5, 502.0], [86.6, 502.0], [86.7, 502.0], [86.8, 502.0], [86.9, 502.0], [87.0, 528.0], [87.1, 528.0], [87.2, 528.0], [87.3, 528.0], [87.4, 528.0], [87.5, 550.0], [87.6, 550.0], [87.7, 550.0], [87.8, 550.0], [87.9, 550.0], [88.0, 685.0], [88.1, 685.0], [88.2, 685.0], [88.3, 685.0], [88.4, 685.0], [88.5, 756.0], [88.6, 756.0], [88.7, 756.0], [88.8, 756.0], [88.9, 756.0], [89.0, 779.0], [89.1, 779.0], [89.2, 779.0], [89.3, 779.0], [89.4, 779.0], [89.5, 844.0], [89.6, 844.0], [89.7, 844.0], [89.8, 844.0], [89.9, 844.0], [90.0, 899.0], [90.1, 899.0], [90.2, 899.0], [90.3, 899.0], [90.4, 899.0], [90.5, 903.0], [90.6, 903.0], [90.7, 903.0], [90.8, 903.0], [90.9, 903.0], [91.0, 927.0], [91.1, 927.0], [91.2, 927.0], [91.3, 927.0], [91.4, 927.0], [91.5, 963.0], [91.6, 963.0], [91.7, 963.0], [91.8, 963.0], [91.9, 963.0], [92.0, 1026.0], [92.1, 1026.0], [92.2, 1026.0], [92.3, 1026.0], [92.4, 1026.0], [92.5, 1105.0], [92.6, 1105.0], [92.7, 1105.0], [92.8, 1105.0], [92.9, 1105.0], [93.0, 1143.0], [93.1, 1143.0], [93.2, 1143.0], [93.3, 1143.0], [93.4, 1143.0], [93.5, 1199.0], [93.6, 1199.0], [93.7, 1199.0], [93.8, 1199.0], [93.9, 1199.0], [94.0, 1258.0], [94.1, 1258.0], [94.2, 1258.0], [94.3, 1258.0], [94.4, 1258.0], [94.5, 1305.0], [94.6, 1305.0], [94.7, 1305.0], [94.8, 1305.0], [94.9, 1305.0], [95.0, 1353.0], [95.1, 1353.0], [95.2, 1353.0], [95.3, 1353.0], [95.4, 1353.0], [95.5, 1403.0], [95.6, 1403.0], [95.7, 1403.0], [95.8, 1403.0], [95.9, 1403.0], [96.0, 1452.0], [96.1, 1452.0], [96.2, 1452.0], [96.3, 1452.0], [96.4, 1452.0], [96.5, 1500.0], [96.6, 1500.0], [96.7, 1500.0], [96.8, 1500.0], [96.9, 1500.0], [97.0, 1507.0], [97.1, 1507.0], [97.2, 1507.0], [97.3, 1507.0], [97.4, 1507.0], [97.5, 1507.0], [97.6, 1507.0], [97.7, 1507.0], [97.8, 1507.0], [97.9, 1507.0], [98.0, 1508.0], [98.1, 1508.0], [98.2, 1508.0], [98.3, 1508.0], [98.4, 1508.0], [98.5, 1509.0], [98.6, 1509.0], [98.7, 1509.0], [98.8, 1509.0], [98.9, 1509.0], [99.0, 1513.0], [99.1, 1513.0], [99.2, 1513.0], [99.3, 1513.0], [99.4, 1513.0], [99.5, 1514.0], [99.6, 1514.0], [99.7, 1514.0], [99.8, 1514.0], [99.9, 1514.0]], "isOverall": false, "label": "reqres api", "isController": false}], "supportsControllersDiscrimination": true, "maxX": 100.0, "title": "Response Time Percentiles"}},
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
        data: {"result": {"minY": 1.0, "minX": 100.0, "maxY": 74.0, "series": [{"data": [[600.0, 1.0], [700.0, 2.0], [800.0, 2.0], [200.0, 74.0], [900.0, 3.0], [1000.0, 1.0], [1100.0, 3.0], [300.0, 19.0], [1200.0, 1.0], [1300.0, 2.0], [1400.0, 2.0], [1500.0, 7.0], [400.0, 6.0], [100.0, 74.0], [500.0, 3.0]], "isOverall": false, "label": "reqres api", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 100, "maxX": 1500.0, "title": "Response Time Distribution"}},
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
        data: {"result": {"minY": 6.0, "minX": 0.0, "ticks": [[0, "Requests having \nresponse time <= 500ms"], [1, "Requests having \nresponse time > 500ms and <= 1,500ms"], [2, "Requests having \nresponse time > 1,500ms"], [3, "Requests in error"]], "maxY": 173.0, "series": [{"data": [[0.0, 173.0]], "color": "#9ACD32", "isOverall": false, "label": "Requests having \nresponse time <= 500ms", "isController": false}, {"data": [[1.0, 21.0]], "color": "yellow", "isOverall": false, "label": "Requests having \nresponse time > 500ms and <= 1,500ms", "isController": false}, {"data": [[2.0, 6.0]], "color": "orange", "isOverall": false, "label": "Requests having \nresponse time > 1,500ms", "isController": false}, {"data": [], "color": "#FF6347", "isOverall": false, "label": "Requests in error", "isController": false}], "supportsControllersDiscrimination": false, "maxX": 2.0, "title": "Synthetic Response Times Distribution"}},
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
        data: {"result": {"minY": 8.595, "minX": 1.72880052E12, "maxY": 8.595, "series": [{"data": [[1.72880052E12, 8.595]], "isOverall": false, "label": "Thread Group", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.72880052E12, "title": "Active Threads Over Time"}},
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
        data: {"result": {"minY": 141.1111111111111, "minX": 1.0, "maxY": 1514.0, "series": [{"data": [[2.0, 168.0], [35.0, 1026.0], [36.0, 983.6], [3.0, 141.1111111111111], [4.0, 179.61016949152545], [5.0, 217.325], [6.0, 296.95238095238096], [7.0, 262.8666666666668], [8.0, 449.40000000000003], [9.0, 519.75], [10.0, 457.5], [11.0, 432.75], [12.0, 239.0], [13.0, 277.6666666666667], [15.0, 306.5], [16.0, 469.0], [1.0, 193.0], [17.0, 899.0], [18.0, 1514.0], [19.0, 628.0], [23.0, 929.3333333333334], [24.0, 1500.0], [25.0, 1479.5], [27.0, 1143.0], [30.0, 851.5]], "isOverall": false, "label": "reqres api", "isController": false}, {"data": [[8.595, 345.7750000000003]], "isOverall": false, "label": "reqres api-Aggregated", "isController": false}], "supportsControllersDiscrimination": true, "maxX": 36.0, "title": "Time VS Threads"}},
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
        data : {"result": {"minY": 410.0, "minX": 1.72880052E12, "maxY": 6453.333333333333, "series": [{"data": [[1.72880052E12, 6453.333333333333]], "isOverall": false, "label": "Bytes received per second", "isController": false}, {"data": [[1.72880052E12, 410.0]], "isOverall": false, "label": "Bytes sent per second", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.72880052E12, "title": "Bytes Throughput Over Time"}},
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
        data: {"result": {"minY": 345.7750000000003, "minX": 1.72880052E12, "maxY": 345.7750000000003, "series": [{"data": [[1.72880052E12, 345.7750000000003]], "isOverall": false, "label": "reqres api", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.72880052E12, "title": "Response Time Over Time"}},
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
        data: {"result": {"minY": 340.94500000000016, "minX": 1.72880052E12, "maxY": 340.94500000000016, "series": [{"data": [[1.72880052E12, 340.94500000000016]], "isOverall": false, "label": "reqres api", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.72880052E12, "title": "Latencies Over Time"}},
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
        data: {"result": {"minY": 228.26999999999998, "minX": 1.72880052E12, "maxY": 228.26999999999998, "series": [{"data": [[1.72880052E12, 228.26999999999998]], "isOverall": false, "label": "reqres api", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.72880052E12, "title": "Connect Time Over Time"}},
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
        data: {"result": {"minY": 121.0, "minX": 1.72880052E12, "maxY": 1514.0, "series": [{"data": [[1.72880052E12, 1514.0]], "isOverall": false, "label": "Max", "isController": false}, {"data": [[1.72880052E12, 121.0]], "isOverall": false, "label": "Min", "isController": false}, {"data": [[1.72880052E12, 893.5000000000003]], "isOverall": false, "label": "90th percentile", "isController": false}, {"data": [[1.72880052E12, 1512.96]], "isOverall": false, "label": "99th percentile", "isController": false}, {"data": [[1.72880052E12, 219.0]], "isOverall": false, "label": "Median", "isController": false}, {"data": [[1.72880052E12, 1350.5999999999995]], "isOverall": false, "label": "95th percentile", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.72880052E12, "title": "Response Time Percentiles Over Time (successful requests only)"}},
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
    data: {"result": {"minY": 171.0, "minX": 9.0, "maxY": 767.5, "series": [{"data": [[18.0, 205.5], [9.0, 187.0], [19.0, 172.0], [20.0, 190.0], [21.0, 177.0], [44.0, 767.5], [22.0, 246.5], [23.0, 171.0], [24.0, 258.0]], "isOverall": false, "label": "Successes", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 1000, "maxX": 44.0, "title": "Response Time Vs Request"}},
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
    data: {"result": {"minY": 171.0, "minX": 9.0, "maxY": 749.0, "series": [{"data": [[18.0, 203.0], [9.0, 178.0], [19.0, 172.0], [20.0, 189.5], [21.0, 175.0], [44.0, 749.0], [22.0, 246.5], [23.0, 171.0], [24.0, 257.0]], "isOverall": false, "label": "Successes", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 1000, "maxX": 44.0, "title": "Latencies Vs Request"}},
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
        data: {"result": {"minY": 3.3333333333333335, "minX": 1.72880052E12, "maxY": 3.3333333333333335, "series": [{"data": [[1.72880052E12, 3.3333333333333335]], "isOverall": false, "label": "hitsPerSecond", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.72880052E12, "title": "Hits Per Second"}},
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
        data: {"result": {"minY": 3.3333333333333335, "minX": 1.72880052E12, "maxY": 3.3333333333333335, "series": [{"data": [[1.72880052E12, 3.3333333333333335]], "isOverall": false, "label": "200", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.72880052E12, "title": "Codes Per Second"}},
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
        data: {"result": {"minY": 3.3333333333333335, "minX": 1.72880052E12, "maxY": 3.3333333333333335, "series": [{"data": [[1.72880052E12, 3.3333333333333335]], "isOverall": false, "label": "reqres api-success", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.72880052E12, "title": "Transactions Per Second"}},
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
        data: {"result": {"minY": 3.3333333333333335, "minX": 1.72880052E12, "maxY": 3.3333333333333335, "series": [{"data": [[1.72880052E12, 3.3333333333333335]], "isOverall": false, "label": "Transaction-success", "isController": false}, {"data": [], "isOverall": false, "label": "Transaction-failure", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.72880052E12, "title": "Total Transactions Per Second"}},
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

