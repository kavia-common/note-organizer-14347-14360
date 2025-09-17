# AppBar — Actions Examples

Basic:
```
<AppBar title="Notes" onAdd={onCreate} />
```

With right-side custom actions:
```
<AppBar
  title="Ocean Notes"
  right={
    <View style={{ flexDirection: 'row', gap: 8 }}>
      <TouchableOpacity style={pill}><Text>Help</Text></TouchableOpacity>
      <TouchableOpacity style={pill}><Text>Settings</Text></TouchableOpacity>
    </View>
  }
/>
```

With subtitle (variant):
```
import AppBarWithSubtitle from './AppBar.withSubtitle';

<AppBarWithSubtitle
  title="Notes"
  subtitle="Ocean Professional — blue & amber accents"
  onAdd={onCreate}
/>
```
