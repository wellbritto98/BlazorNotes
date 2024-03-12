﻿using Newtonsoft.Json;

namespace Models.Models.Home
{
    public class Fields
    {
        [JsonProperty("title")]
        public StringValue Title { get; set; }

        [JsonProperty("subhead")]
        public StringValue Subhead { get; set; }

        [JsonProperty("content")]
        public StringValue Content { get; set; }
    }
}