export function generateXmlExample(dymoName = "", dymoKunde="", dymoAFK="") {
  var labelXml = `<?xml version="1.0" encoding="utf-8"?>
  <DieCutLabel Version="8.0" Units="twips">
    <PaperOrientation>Landscape</PaperOrientation>
    <Id>Shipping</Id>
    <IsOutlined>false</IsOutlined>
    <PaperName>30323 Shipping</PaperName>
    <DrawCommands>
      <RoundRectangle X="0" Y="0" Width="3060" Height="5715" Rx="270" Ry="270" />
    </DrawCommands>
    <ObjectInfo>
      <TextObject>
        <Name>TEXT</Name>
        <ForeColor Alpha="255" Red="0" Green="0" Blue="0" />
        <BackColor Alpha="0" Red="255" Green="255" Blue="255" />
        <LinkedObjectName />
        <Rotation>Rotation0</Rotation>
        <IsMirrored>False</IsMirrored>
        <IsVariable>False</IsVariable>
        <GroupID>-1</GroupID>
        <IsOutlined>False</IsOutlined>
        <HorizontalAlignment>Left</HorizontalAlignment>
        <VerticalAlignment>Top</VerticalAlignment>
        <TextFitMode>None</TextFitMode>
        <UseFullFontHeight>True</UseFullFontHeight>
        <Verticalized>False</Verticalized>
        <StyledText>
          <Element>
            <String xml:space="preserve">${dymoName} - Kapseln - Dosen
  </String>
            <Attributes>
              <Font Family="Segoe UI" Size="12" Bold="True" Italic="False" Underline="False" Strikeout="False" />
              <ForeColor Alpha="255" Red="0" Green="0" Blue="0" HueScale="100" />
            </Attributes>
          </Element>
          <Element>
            <String xml:space="preserve">Kunde: </String>
            <Attributes>
              <Font Family="Segoe UI" Size="10" Bold="False" Italic="False" Underline="False" Strikeout="False" />
              <ForeColor Alpha="255" Red="0" Green="0" Blue="0" HueScale="100" />
            </Attributes>
          </Element>
          <Element>
            <String xml:space="preserve">${dymoKunde}
  </String>
            <Attributes>
              <Font Family="Segoe UI" Size="10" Bold="True" Italic="False" Underline="False" Strikeout="False" />
              <ForeColor Alpha="255" Red="0" Green="0" Blue="0" HueScale="100" />
            </Attributes>
          </Element>
          <Element>
            <String xml:space="preserve">Auftrag: </String>
            <Attributes>
              <Font Family="Segoe UI" Size="10" Bold="False" Italic="False" Underline="False" Strikeout="False" />
              <ForeColor Alpha="255" Red="0" Green="0" Blue="0" HueScale="100" />
            </Attributes>
          </Element>
          <Element>
            <String xml:space="preserve">AFK-${dymoAFK}</String>
            <Attributes>
              <Font Family="Segoe UI" Size="12" Bold="True" Italic="False" Underline="False" Strikeout="False" />
              <ForeColor Alpha="255" Red="0" Green="0" Blue="0" HueScale="100" />
            </Attributes>
          </Element>
          <Element>
            <String xml:space="preserve"> aus </String>
            <Attributes>
              <Font Family="Segoe UI" Size="12" Bold="False" Italic="False" Underline="False" Strikeout="False" />
              <ForeColor Alpha="255" Red="0" Green="0" Blue="0" HueScale="100" />
            </Attributes>
          </Element>
          <Element>
            <String xml:space="preserve">904-A
  </String>
            <Attributes>
              <Font Family="Segoe UI" Size="12" Bold="True" Italic="False" Underline="False" Strikeout="False" />
              <ForeColor Alpha="255" Red="0" Green="0" Blue="0" HueScale="100" />
            </Attributes>
          </Element>
          <Element>
            <String xml:space="preserve">Menge: </String>
            <Attributes>
              <Font Family="Segoe UI" Size="10" Bold="False" Italic="False" Underline="False" Strikeout="False" />
              <ForeColor Alpha="255" Red="0" Green="0" Blue="0" HueScale="100" />
            </Attributes>
          </Element>
          <Element>
            <String xml:space="preserve"></String>
            <Attributes>
              <Font Family="Segoe UI" Size="10" Bold="True" Italic="False" Underline="False" Strikeout="False" />
              <ForeColor Alpha="255" Red="0" Green="0" Blue="0" HueScale="100" />
            </Attributes>
          </Element>
          <Element>
            <String xml:space="preserve">Dosen
  </String>
            <Attributes>
              <Font Family="Segoe UI" Size="12" Bold="True" Italic="False" Underline="False" Strikeout="False" />
              <ForeColor Alpha="255" Red="0" Green="0" Blue="0" HueScale="100" />
            </Attributes>
          </Element>
          <Element>
            <String xml:space="preserve">Kundencharge: </String>
            <Attributes>
              <Font Family="Segoe UI" Size="10" Bold="False" Italic="False" Underline="False" Strikeout="False" />
              <ForeColor Alpha="255" Red="0" Green="0" Blue="0" HueScale="100" />
            </Attributes>
          </Element>
          <Element>
            <String xml:space="preserve">TUP-904
  </String>
            <Attributes>
              <Font Family="Segoe UI" Size="10" Bold="True" Italic="False" Underline="False" Strikeout="False" />
              <ForeColor Alpha="255" Red="0" Green="0" Blue="0" HueScale="100" />
            </Attributes>
          </Element>
          <Element>
            <String xml:space="preserve">MHD</String>
            <Attributes>
              <Font Family="Segoe UI" Size="10" Bold="False" Italic="False" Underline="False" Strikeout="False" />
              <ForeColor Alpha="255" Red="0" Green="0" Blue="0" HueScale="100" />
            </Attributes>
          </Element>
          <Element>
            <String xml:space="preserve">: </String>
            <Attributes>
              <Font Family="Segoe UI" Size="12" Bold="False" Italic="False" Underline="False" Strikeout="False" />
              <ForeColor Alpha="255" Red="0" Green="0" Blue="0" HueScale="100" />
            </Attributes>
          </Element>
          <Element>
            <String xml:space="preserve">05/2025
  </String>
            <Attributes>
              <Font Family="Segoe UI" Size="12" Bold="True" Italic="False" Underline="False" Strikeout="False" />
              <ForeColor Alpha="255" Red="0" Green="0" Blue="0" HueScale="100" />
            </Attributes>
          </Element>
          <Element>
            <String xml:space="preserve">DE-ÖKO-003
  </String>
            <Attributes>
              <Font Family="Segoe UI" Size="8" Bold="True" Italic="False" Underline="False" Strikeout="False" />
              <ForeColor Alpha="255" Red="0" Green="0" Blue="0" HueScale="100" />
            </Attributes>
          </Element>
          <Element>
            <String xml:space="preserve">Nietiet GmbH
  DEA-Str. 4 
  29323 Wietze
  </String>
            <Attributes>
              <Font Family="Segoe UI" Size="7" Bold="False" Italic="False" Underline="False" Strikeout="False" />
              <ForeColor Alpha="255" Red="0" Green="0" Blue="0" HueScale="100" />
            </Attributes>
          </Element>
          <Element>
            <String xml:space="preserve">Deutschland</String>
            <Attributes>
              <Font Family="Segoe UI" Size="8" Bold="False" Italic="False" Underline="False" Strikeout="False" />
              <ForeColor Alpha="255" Red="0" Green="0" Blue="0" HueScale="100" />
            </Attributes>
          </Element>
        </StyledText>
      </TextObject>
      <Bounds X="307" Y="58" Width="5003" Height="2918" />
    </ObjectInfo>
    <ObjectInfo>
      <ShapeObject Stroke="SolidLine">
        <Name>FORM</Name>
        <ForeColor Alpha="255" Red="0" Green="0" Blue="0" />
        <BackColor Alpha="0" Red="255" Green="255" Blue="255" />
        <LinkedObjectName />
        <Rotation>Rotation0</Rotation>
        <IsMirrored>False</IsMirrored>
        <IsVariable>False</IsVariable>
        <GroupID>-1</GroupID>
        <IsOutlined>False</IsOutlined>
        <ShapeType>HorizontalLine</ShapeType>
        <LineWidth>15</LineWidth>
        <LineAlignment>Center</LineAlignment>
        <FillColor Alpha="0" Red="255" Green="255" Blue="255" />
      </ShapeObject>
      <Bounds X="3050" Y="2751" Width="2550" Height="15" />
    </ObjectInfo>
    <ObjectInfo>
      <TextObject>
        <Name>TEXT_1</Name>
        <ForeColor Alpha="255" Red="0" Green="0" Blue="0" />
        <BackColor Alpha="0" Red="255" Green="255" Blue="255" />
        <LinkedObjectName />
        <Rotation>Rotation0</Rotation>
        <IsMirrored>False</IsMirrored>
        <IsVariable>False</IsVariable>
        <GroupID>-1</GroupID>
        <IsOutlined>False</IsOutlined>
        <HorizontalAlignment>Left</HorizontalAlignment>
        <VerticalAlignment>Top</VerticalAlignment>
        <TextFitMode>ShrinkToFit</TextFitMode>
        <UseFullFontHeight>True</UseFullFontHeight>
        <Verticalized>False</Verticalized>
        <StyledText>
          <Element>
            <String xml:space="preserve">Mitarbeiter</String>
            <Attributes>
              <Font Family="Arial" Size="10" Bold="False" Italic="False" Underline="False" Strikeout="False" />
              <ForeColor Alpha="255" Red="0" Green="0" Blue="0" HueScale="100" />
            </Attributes>
          </Element>
        </StyledText>
      </TextObject>
      <Bounds X="4010" Y="2781" Width="1290" Height="195" />
    </ObjectInfo>
    <ObjectInfo>
      <CounterObject>
        <Name>ZÄHLER</Name>
        <ForeColor Alpha="255" Red="0" Green="0" Blue="0" />
        <BackColor Alpha="0" Red="255" Green="255" Blue="255" />
        <LinkedObjectName />
        <Rotation>Rotation0</Rotation>
        <IsMirrored>False</IsMirrored>
        <IsVariable>False</IsVariable>
        <GroupID>-1</GroupID>
        <IsOutlined>False</IsOutlined>
        <HorizontalAlignment>Center</HorizontalAlignment>
        <VerticalAlignment>Middle</VerticalAlignment>
        <TextFitMode>ShrinkToFit</TextFitMode>
        <UseFullFontHeight>True</UseFullFontHeight>
        <Verticalized>False</Verticalized>
        <Font Family="Arial" Size="24" Bold="False" Italic="False" Underline="False" Strikeout="False" />
        <PreText>Karton: </PreText>
        <PostText></PostText>
        <Start>1</Start>
        <Current>1</Current>
        <Increment>1</Increment>
        <FormatWidth>3</FormatWidth>
        <UseLeadingZeros>True</UseLeadingZeros>
      </CounterObject>
      <Bounds X="3245" Y="1890" Width="2130" Height="525" />
    </ObjectInfo>
  </DieCutLabel>`;
  return labelXml;
}
    // <ObjectInfo>
    //   <TextObject>
    //     <Name>TEXT</Name>
    //     <ForeColor Alpha="255" Red="0" Green="0" Blue="0" />
    //     <BackColor Alpha="0" Red="255" Green="255" Blue="255" />
    //     <LinkedObjectName />
    //     <Rotation>Rotation0</Rotation>
    //     <IsMirrored>False</IsMirrored>
    //     <IsVariable>False</IsVariable>
    //     <GroupID>-1</GroupID>
    //     <IsOutlined>False</IsOutlined>
    //     <HorizontalAlignment>Center</HorizontalAlignment>
    //     <VerticalAlignment>Middle</VerticalAlignment>
    //     <TextFitMode>ShrinkToFit</TextFitMode>
    //     <UseFullFontHeight>True</UseFullFontHeight>
    //     <Verticalized>False</Verticalized>
    //     <StyledText>
		// 			<String xml:space="preserve">${dymoKunde} - Kapseln - Dosen</String>
		// 			<Attributes>
		// 				<Font Family="Segoe UI" Size="12" Bold="True" Italic="False" Underline="False" Strikeout="False" />
		// 				<ForeColor Alpha="255" Red="0" Green="0" Blue="0" HueScale="100" />
		// 			</Attributes>
		// 		</Element>
    //     <Element>
    //         <String xml:space="preserve">${dymoName}</String>
    //         <Attributes>
    //           <Font Family="Arial" Size="12" Bold="False" Italic="False" Underline="False" Strikeout="False" />
    //           <ForeColor Alpha="255" Red="0" Green="0" Blue="0" HueScale="100" />
    //         </Attributes>
    //       </Element>
    //       <Element>
    //     </StyledText>
    //   </TextObject>
    //   <Bounds X="130" Y="300" Width="2846" Height="720" />
    // </ObjectInfo>