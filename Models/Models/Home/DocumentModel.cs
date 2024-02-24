using Newtonsoft.Json;

namespace Models.Models.Home
{
    public class Document
    {
        [JsonProperty("name")]
        public string Name { get; set; }
        [JsonProperty("fields")]
        public Fields Fields { get; set; }

        [JsonProperty("createTime")]
        public string CreateTime { get; set; }

        [JsonProperty("updateTime")]
        public string UpdateTime { get; set; }
    }
}
