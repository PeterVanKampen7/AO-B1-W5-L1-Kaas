var geel = prompt("Is de kaas geel? (ja/nee)");
geel = geel.toLowerCase();
	if(geel == "ja") 
	{
		var gaten = prompt("Zitten er gaten in? (ja/nee)");
    gaten = gaten.toLowerCase();
		if(gaten == "ja")
		{
			var duur = prompt("Is de kaas belachelijk duur? (ja/nee)")
      duur = duur.toLowerCase();
			if(duur == "ja")
			{
				alert("De kaas die u zoekt is Emmenthaler.");
			}
			else if(duur == "nee")
			{
				alert("De kaas die u zoekt is Leerdammer.");
			}
			else
			{
				alert("Er is geen geldig antwoord ingevuld.");
			}
		}
		else if(gaten == "nee")
		{
			var hard = prompt("Is de kaas hard als steen? (ja/nee)");
      hard = hard.toLowerCase();
			if(hard == "ja")
			{
				alert("De kaas die u zoekt is Panmigiano Reggiano.");
			}
			else if(hard == "nee")
			{
				alert("De kaas die u zoekt is Goudse Kaas.");
			}
			else
			{
				alert("Er is geen geldig antwoord ingevuld.");
			}
		}
		else
		{
			alert("Er is geen geldig antwoord ingevuld.");
		}
	}
	else if(geel == "nee") 
	{
		var schimmel = prompt("Heeft de kaas blauwe schimmels? (ja/nee)");
    schimmel = schimmel.toLowerCase();
		if(schimmel == "ja")
		{
			var korst = prompt("Heeft de kaas een korst? (ja/nee)");
      korst = korst.toLowerCase();
			if(korst == "ja")
			{
				alert("De kaas die u zoekt is Bleu de Rochbaron.");
			}
			else if(korst == "nee")
			{
				alert("De kaas die u zoekt is Founme d'Ambert.");
			}
			else
			{
				alert("Er is geen geldig antwoord ingevuld.");
			}
		}
		else if(schimmel == "nee")
		{
			var korst2 = prompt("Heeft de kaas een korst? (ja/nee)");
      korst2 = korst2.toLowerCase();
			if(korst2 == "ja")
			{
				alert("De kaas die u zoekt is Camembert");
			}
			else if(korst2 == "nee")
			{
				alert("De kaas die u zoekt is Mozzarella.");
			}
			else
			{
				alert("Er is geen geldig antwoord ingevuld.");
			}
		}
		else
		{
			alert("Er is geen geldig antwoord ingevuld.");
		}
	}
	else
	{
		alert("Er is geen geldig antwoord ingevuld.");
	}