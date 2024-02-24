using Newtonsoft.Json;

namespace Models.Models.Home
{
    public class StringValue
    {
        [JsonProperty("stringValue")]
        public string Value { get; set; }
    }
}
